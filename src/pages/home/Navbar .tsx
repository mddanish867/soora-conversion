import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();


  const handleDashboard = () => {
    navigate("/dashboard")
  }
  const handleProfile = () => {
    navigate("/dashboard/profile")
  }

  const handleBatchConversion = () => {
    navigate("/batch-conversion")
  }
  
  const handleFileComparison = () => {
    navigate("/file-comparison")
  }
  
  const handlePremium = () => {
    navigate("/premium-features")
  }
  const handleChatDoc = () => {
    navigate("/document-interaction")
  }
  const handleConversionService = () => {
    navigate("/conversion-service")
  }
  
  
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-gray-900 text-2xl font-bold">
                Soora<span className="text-sm text-yellow-200 bg-pink-400 rounded-md p-1">Converter</span>
              </span>
            </Link>
            <div className="hidden md:block ml-10">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                    onClick={handleConversionService}
                    className="text-gray-900 hover:text-gray-600">
                      Convert
                    </NavigationMenuTrigger>
                    
                  </NavigationMenuItem>
                </NavigationMenuList>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                    onClick={handleBatchConversion}
                    className="text-gray-900 hover:text-gray-600">
                      Batch Conversion
                    </NavigationMenuTrigger>
                   
                  </NavigationMenuItem>
                </NavigationMenuList>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                    onClick={handleFileComparison}
                    className="text-gray-900 hover:text-gray-600">
                      File Comparison
                    </NavigationMenuTrigger>
                   
                  </NavigationMenuItem>
                </NavigationMenuList>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                    onClick={handlePremium}
                    className="text-gray-900 hover:text-gray-600">
                      Premium Features
                    </NavigationMenuTrigger>
                   
                  </NavigationMenuItem>
                </NavigationMenuList>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                    onClick={handleChatDoc}
                     className="text-gray-900 hover:text-gray-600">
                      Chat with Document
                    </NavigationMenuTrigger>
                   
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <Link to="/login">
                <Button
                  variant="outline"
                  className="text-gray-900 hover:text-white hover:bg-gray-900"
                >
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  variant="default"
                  className="bg-gray-900 text-white hover:bg-gray-700"
                >
                  Register
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="/placeholder-avatar.jpg"
                        alt="@username"
                      />
                      <AvatarFallback>UN</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        mddanish
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        danish@gmail.com
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
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/conversion-service"
              className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Convert
            </Link>
            <Link
              to="/batch-conversion"
              className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Batch Converison
            </Link>
            <Link
              to="/file-comparison"
              className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              File Comparison
            </Link>
            <Link
              to="/premium-features"
              className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Premium Feature
            </Link>
            <Link
              to="/document-interaction"
              className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Chat with Document
            </Link>
            <Link
              to="/login"
              className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Register
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
