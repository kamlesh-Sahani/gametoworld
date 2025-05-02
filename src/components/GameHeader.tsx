"use client";

import { motion } from "framer-motion";
import { FaSearch, FaGamepad } from "react-icons/fa";
import { GiJoystick } from "react-icons/gi";

const GameHeader = ({ searchQuery, setSearchQuery }: { searchQuery: any; setSearchQuery: any }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <header className="relative bg-gray-900 overflow-hidden min-h-[80vh] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-[100px] opacity-20 animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-600 rounded-full filter blur-[120px] opacity-15 animate-float-delay"></div>
      </div>
      <div className="absolute inset-0 border-[16px] border-transparent">
        <div className="absolute inset-0 border-[1px] border-white/10 rounded-lg pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <GiJoystick className="mx-auto text-6xl text-purple-400/80" />
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 leading-tight"
          >
            PLAY INSTANT GAMES
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            No downloads. No installs. Just click and play your favorite games instantly!
          </motion.p>
          
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

          <motion.div 
            variants={itemVariants}
            className="mt-12 flex justify-center space-x-4"
          >
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-purple-500/30">
              Browse Games
            </button>
            <button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full font-bold transition-all border border-gray-700 hover:border-gray-600">
              Popular Now
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating gamepad decoration */}
      <motion.div 
        className="absolute bottom-20 left-10 text-purple-400/10"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <FaGamepad className="text-6xl" />
      </motion.div>

      <motion.div 
        className="absolute bottom-32 right-16 text-blue-400/10"
        animate={{
          y: [0, -30, 0],
          rotate: [0, -8, 8, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <FaGamepad className="text-8xl" />
      </motion.div>

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
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