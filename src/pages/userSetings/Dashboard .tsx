import { useState, useEffect } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  History,
  User,
  Bell,
  Shield,
  Trash2,
  Menu,
  X,
  FileText,  
  Star,
} from "lucide-react";

const menuItems = [
  { icon: User, name: "Profile", path: "/dashboard/profile" },
  { icon: History, name: "History", path: "/dashboard/history" },
  { icon: Bell, name: "Notifications", path: "/dashboard/notifications" },
  { icon: Shield, name: "Security", path: "/dashboard/security" },
  { icon: FileText, name: "Conversion Status", path: "/dashboard/conversion-status" },
  { icon: Star, name: "Document Comment", path: "/dashboard/document-comment" },
  { icon: Trash2, name: "Delete Account", path: "/dashboard/delete-account" },
];

const Sidebar = ({ isOpen, toggleSidebar }: any) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <motion.div
      className={`left-0 top-16 bottom-0 z-50 w-64 bg-white shadow-md overflow-y-auto transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
      initial={false}
    >
      <div className="flex items-center justify-between p-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="lg:hidden"
        >
          <X />
        </Button>
      </div>
      <nav className="mt-8">
        {menuItems.map((item) => (
          <Button
            key={item.name}
            variant="ghost"
            className={`w-52 justify-start px-4 py-2 text-gray-950 hover:bg-gray-100 ${
              location.pathname === item.path ? "bg-gray-100" : ""
            }`}
            onClick={() => {
              navigate(item.path);
              if (window.innerWidth < 1024) {
                toggleSidebar();
              }
            }}
          >
            <item.icon className="h-5 w-5 mr-2" />
            <span>{item.name}</span>
          </Button>
        ))}
      </nav>
    </motion.div>
  );
};

const TabNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="w-full bg-white">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex p-2">
          {menuItems.map((item) => (
            <Button
              key={item.name}
              variant={location.pathname === item.path ? "default" : "ghost"}
              className="px-4 py-2 mx-1"
              onClick={() => navigate(item.path)}
            >
              {item.name}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const isSmallScreen = useMediaQuery({ maxWidth: 640 });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set initial state

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (location.pathname === '/dashboard' || location.pathname === '/dashboard/') {
      navigate('/dashboard/profile');
    }
  }, [location.pathname, navigate]);

  return (
    <div className="flex w-screen h-screen bg-white">
      {!isSmallScreen && (
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      )}
      <div className="w-full">
        <header className="bg-white">
          {!isSmallScreen && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="lg:hidden"
            >
              {!sidebarOpen && <Menu />}
            </Button>
          )}
        </header>
        <main className="flex flex-col overflow-x-hidden overflow-y-auto bg-white">
          {isSmallScreen && <TabNavigation />}
          <div className="w-full h-full px-4 py-4 sm:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;