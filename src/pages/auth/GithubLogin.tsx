import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function GithubLogin() {
  const handleGitHubLogin = () => {
    window.location.href = "http://localhost:3000/api/auth/github";
  };

  return (
    <Button
      onClick={handleGitHubLogin}
      variant="outline"
      size="icon"
      className="bg-gray-900 hover:bg-gray-950 hover:text-white text-white"
    >
      <FaGithub className="w-4 h-4" />
    </Button>
  );
}
