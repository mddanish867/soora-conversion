import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, LogOut, LayoutDashboard } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState, useEffect } from "react";

const UserDropdown = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [imageError, setImageError] = useState(false);

  // Reset image error state when user changes
  useEffect(() => {
    setImageError(false);
  }, [user?.picture]);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const handleDashboard = () => {
    navigate("/dashboard");
  };

  const handleProfile = () => {
    navigate("/dashboard/profile");
  };

  // Get initials from name for the avatar fallback
  const getInitials = (name: string) => {
    if (!name) return "UN";
    return name
      .split(" ")
      .map((part) => part && part[0])
      .filter(Boolean)
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  // Handle image load error
  const handleImageError = () => {
    console.log("Image failed to load");
    setImageError(true);
  };

  return (
    <>
      {/* Desktop version */}
      <div className="hidden md:block">
        <div className="ml-4 flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  {user?.picture && !imageError ? (
                    <AvatarImage
                      src={user.picture}
                      alt={user?.name || "User"}
                      onError={handleImageError}
                    />
                  ) : null}
                  {!user?.picture ||
                    (!imageError && (
                      <AvatarFallback className="bg-black text-white border">
                        {getInitials(user?.name || "")}
                      </AvatarFallback>
                    ))}
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {user?.name || "User"}
                  </p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {user?.email || ""}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleProfile}>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleDashboard}>
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Mobile version */}
      <div className="md:hidden flex items-center">
        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  {user?.picture && !imageError ? (
                    <AvatarImage
                      src={user.picture}
                      alt={user?.name || "User"}
                      onError={handleImageError}
                    />
                  ) : null}
                  <AvatarFallback>
                    {getInitials(user?.name || "")}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {user?.name || "User"}
                  </p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {user?.email || ""}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleProfile}>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleDashboard}>
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
};

export default UserDropdown;
