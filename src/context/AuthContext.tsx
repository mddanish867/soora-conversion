import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react';
import { BASE_URL } from "../lib/constant";

interface User {
  id: number;
  googleId: string;
  email: string;
  name: string;
  picture: string | null;
}

interface AuthContextType {
  user: User | null;
  accessToken: string | null;
  loading: boolean;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(() => {
    // Initialize from localStorage to prevent flash of unauthenticated state
    const cachedUser = localStorage.getItem('user');
    return cachedUser ? JSON.parse(cachedUser) : null;
  });
  
  const [accessToken, setAccessToken] = useState<string | null>(() => {
    return localStorage.getItem('accessToken');
  });
  
  const [loading, setLoading] = useState(!localStorage.getItem('user'));

  const fetchUserAndToken = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/auth/google/get-user`, {
        credentials: 'include',
      });
      
      if (response.ok) {
        const data = await response.json();
        setUser(data);
        setAccessToken(data.accessToken);
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('user', JSON.stringify(data));
      } else {
        setUser(null);
        setAccessToken(null);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      setUser(null);
      setAccessToken(null);
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Only fetch if we don't have user data or if token might be expired
    if (!user || !accessToken) {
      fetchUserAndToken();
    } else {
      setLoading(false);
    }
    
    // Set up token refresh interval (e.g., every 55 minutes if token expires in 1 hour)
    const refreshInterval = setInterval(() => {
      fetchUserAndToken();
    }, 55 * 60 * 1000);
    
    return () => clearInterval(refreshInterval);
  }, [fetchUserAndToken, user, accessToken]);

  const logout = async () => {
    try {
      setLoading(true);
      await fetch(`${BASE_URL}/auth/google/logout`, {        
        credentials: 'include',
      });
      setUser(null);
      setAccessToken(null);
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user');
      document.cookie = 'accessToken=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT';
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setLoading(false);
    }
  };

  // Function to manually refresh user data when needed
  const refreshUser = async () => {
    await fetchUserAndToken();
  };

  const value: AuthContextType = {
    user,
    accessToken,
    loading,
    logout,
    refreshUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};