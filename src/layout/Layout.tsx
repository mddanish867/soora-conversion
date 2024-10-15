import { motion } from "framer-motion";
import Navbar from "@/pages/home/Navbar ";
import { Outlet } from "react-router-dom";
import Footer from "@/pages/home/Footer ";

const Layout = () => {
  return (
    <div className="min-h-screen bg-white text-gray-400 overflow-hidden">
      {/* Geometric shapes */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        animate={{
          x: [0, 100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        animate={{
          x: [0, -100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "linear",
        }}
      />
      <Navbar />
      {/* Main content */}
      <main className="relative z-10"><Outlet/></main>
      <Footer/>
    </div>
  );
};

export default Layout;
