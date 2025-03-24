import { useState, useEffect, useCallback, ReactNode } from 'react';
import { AuthContext } from './AuthContext'; // Import the context

interface User {
  id: number;
  googleId: string;
  email: string;
  name: string;
  picture: string | null;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(() => {
    const cachedUser = localStorage.getItem('user');
    return cachedUser ? JSON.parse(cachedUser) : null;
  });

  const [accessToken, setAccessToken] = useState<string | null>(() => {
    return localStorage.getItem('access_token');
  });

  const [loading, setLoading] = useState(!localStorage.getItem('user'));

  const fetchUserAndToken = useCallback(async () => {
    const refreshToken = localStorage.getItem('refresh_token');
    if (!refreshToken) {
      setLoading(false);
      return;
    }
  console.log(refreshToken);
    try {
      setLoading(true);
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/google/get-user`, {
        method: 'POST', // POST method
        headers: {
          'Content-Type': 'application/json', // JSON body ke liye
        },
        body: JSON.stringify({ refreshToken }), // refresh_token body mein
      });
  
      if (response.ok) {
        const data = await response.json();
        setAccessToken(data.accessToken);
        setUser(data.user);
        localStorage.setItem('access_token', data.accessToken);
        localStorage.setItem('user', JSON.stringify(data.user));
      } else {
        console.error('Failed to fetch user:', response.status);
      }
    } catch (error) {
      console.error('Error fetching user:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!user || !accessToken) {
      fetchUserAndToken();
    } else {
      setLoading(false);
    }

    const refreshInterval = setInterval(() => {
      fetchUserAndToken();
    }, 55 * 60 * 1000);

    return () => clearInterval(refreshInterval);
  }, [fetchUserAndToken, user, accessToken]);

  const logout = async () => {
    try {
      setLoading(true);
      await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/google/logout`, {
        credentials: 'include',
      });
      setUser(null);
      setAccessToken(null);
      localStorage.removeItem('access_token');
      localStorage.removeItem('user');
      document.cookie = 'access_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT';
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const refreshUser = async () => {
    await fetchUserAndToken();
  };

  const value = {
    user,
    accessToken,
    loading,
    logout,
    refreshUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};