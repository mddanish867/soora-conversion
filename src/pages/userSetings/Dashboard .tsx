import { useState, useEffect } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  History,
  User,
  Bell,
  Shield,
  Trash2,
  Menu,
  X,
  FileText,
  Layers,
  GitCompare,
  Star,
  MessageCircleIcon,
} from "lucide-react";

const Sidebar = ({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: History, name: "History", path: "/dashboard/history" },
    { icon: User, name: "Profile", path: "/dashboard/profile" },
    { icon: Bell, name: "Notifications", path: "/dashboard/notifications" },
    { icon: Shield, name: "Security", path: "/dashboard/security" },
    { icon: Trash2, name: "Delete Account", path: "/dashboard/delete-account" },
    {
      icon: FileText,
      name: "Conversion Status",
      path: "/dashboard/conversion-status",
    },
    {
      icon: Layers,
      name: "Batch Conversion",
      path: "/dashboard/batch-conversion",
    },
    {
      icon: GitCompare,
      name: "File Comparison",
      path: "/dashboard/file-comparison",
    },
    {
      icon: Star,
      name: "Premium Features",
      path: "/dashboard/premium-features",
    },
    {
      icon: MessageCircleIcon,
      name: "Document Interaction",
      path: "/dashboard/document-interaction",
    },
    {
      icon: Star,
      name: "Document Comment",
      path: "/dashboard/document-comment",
    },
  ];

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
            className={`w-full justify-start px-4 py-2 text-gray-950 hover:bg-gray-100 ${
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

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

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

  return (
    <div className="flex h-screen bg-white">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-64">
        <header className="bg-white z-10 border-b">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="lg:hidden"
            >
              {!sidebarOpen && <Menu />}
            </Button>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white">
          <div className="w-full h-full px-8 py-4">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
