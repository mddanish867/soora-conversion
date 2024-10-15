import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">

<div className="absolute inset-0 z-0">
        <div className="grid-pattern"></div>
      </div>
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-8 text-center text-gray-950"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        File Converter
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl mb-12 text-center max-w-2xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Convert your files with ease. Word to PDF, PDF to Word, and more!
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link to="/upload">
          <Button variant="default" size="lg">
            Get started
          </Button>
        </Link>
        <Link to="#">
          <Button variant="link" size="lg">
            Learn More <ArrowRight />
          </Button>
        </Link>
      </motion.div>
{/* Styles for the grid background */}
      <style jsx>{`
        .grid-pattern {
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
