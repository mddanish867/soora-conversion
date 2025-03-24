import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CallbackPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const [isLoading, setIsLoading] = useState(true); // Loading state add kiya

  useEffect(() => {
    const fetchTokens = async () => {
      if (!code) {
        setIsLoading(false);
        return;
      }

      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/auth/google/callback?code=${code}`,
          {
            method: 'GET',
          }
        );
        const data = await res.json();

        if (data.success) {
          // Save tokens in localStorage
          localStorage.setItem('access_token', data.accessToken);
          localStorage.setItem('refresh_token', data.refreshToken);

          // Loading khatam, ab redirect aur hard refresh
          setIsLoading(false);
          navigate('/dashboard', { replace: true }); // Replace history entry
          //window.location.reload(); // Hard refresh
        } else {
          console.error('Error fetching tokens:', data.message);
          setIsLoading(false);
          navigate('/');
        }
      } catch (err) {
        console.error('Callback error:', err);
        setIsLoading(false);
        navigate('/');
      }
    };

    if (code) fetchTokens();
  }, [code, navigate]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full viewport height
        flexDirection: 'column',
      }}
    >
      {isLoading ? (
        <>
          <div
            style={{
              width: '40px',
              height: '40px',
              border: '4px solid #f3f3f3',
              borderTop: '4px solid #3498db',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
            }}
          />
          <p style={{ marginTop: '10px', color: '#333' }}>Loading...</p>
        </>
      ) : null}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default CallbackPage;