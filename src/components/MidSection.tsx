"use client";

import { motion } from "framer-motion";
import { FaSearch, FaGamepad } from "react-icons/fa";
import { GiJoystick } from "react-icons/gi";

const GameHeader = ({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: any;
  setSearchQuery: any;
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <header className="relative overflow-hidden flex items-center mb-4">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="relative max-w-2xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-lg opacity-20 animate-pulse"></div>
            <div className="relative flex items-center shadow-xl">
              <input
                type="text"
                placeholder="Find your next favorite game..."
                className="w-full py-4 px-6 rounded-full bg-gray-800/90 backdrop-blur-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700/50 placeholder-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <motion.button
                className="absolute right-3 bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-full hover:scale-110 transition-transform shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaSearch className="text-xl" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-20 left-10 text-purple-400/10"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <FaGamepad className="text-6xl" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-16 text-blue-400/10"
        animate={{
          y: [0, -30, 0],
          rotate: [0, -8, 8, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <FaGamepad className="text-8xl" />
      </motion.div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 10s ease-in-out infinite 1s;
        }
      `}</style>
    </header>
  );
};

export default GameHeader;
