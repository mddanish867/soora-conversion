import { FaGoogle } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const GoogleLogin = () => {
  const handleGoogleLogin = () => {
    const authorizationUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${
      import.meta.env.VITE_GOOGLE_CLIENT_ID
    }&redirect_uri=${encodeURIComponent(
      import.meta.env.VITE_GOOGLE_REDIRECT_URI
    )}&response_type=code&scope=profile email`;

    window.location.href = authorizationUrl;
  };

  return (
    <div>
      <Button
        onClick={handleGoogleLogin}
        variant="outline"
        size="icon"
        className="bg-red-500 text-white"
      >
        <FaGoogle className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default GoogleLogin;
