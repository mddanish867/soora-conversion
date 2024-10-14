import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
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
        <Link to="/register">
          <Button variant="link" size="lg">
            Learn More <ArrowRight />
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default LandingPage;
