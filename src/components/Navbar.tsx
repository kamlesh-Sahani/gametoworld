"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGamepad, FaSearch, FaUserAlt, FaDiscord, FaTwitter } from "react-icons/fa";
import { GiJoystick } from "react-icons/gi";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Browse", path: "/browse" },
    { name: "Categories", path: "/categories" },
    { name: "Leaderboards", path: "/leaderboards" },
  ];

  return (
    <motion.header 
      className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/" className="flex items-center space-x-2 group">
              <GiJoystick className="text-purple-500 text-2xl" />
              <h1 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                game<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">To</span>world
              </h1>
            </Link>
          </motion.div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ y: -2 }}>
                <Link 
                  href={item.path} 
                  className="text-gray-300 hover:text-white font-medium transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Search Button - Mobile */}
            <button className="md:hidden p-2 text-gray-400 hover:text-white">
              <FaSearch className="text-xl" />
            </button>

            {/* Search Bar - Desktop */}
            <motion.div 
              className="hidden md:flex items-center relative"
              whileHover={{ scale: 1.02 }}
            >
              <input
                type="text"
                placeholder="Search games..."
                className="bg-gray-800 text-white pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 w-48 transition-all"
              />
              <FaSearch className="absolute left-3 text-gray-400" />
            </motion.div>

            {/* Social Icons - Desktop */}
            <div className="hidden md:flex space-x-3">
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-[#5865F2] transition-colors"
                whileHover={{ y: -3 }}
              >
                <FaDiscord className="text-xl" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-[#1DA1F2] transition-colors"
                whileHover={{ y: -3 }}
              >
                <FaTwitter className="text-xl" />
              </motion.a>
            </div>

            {/* Sign In Button */}
            <motion.button
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-5 py-2 rounded-full font-medium flex items-center space-x-2 shadow-lg hover:shadow-purple-500/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaUserAlt className="text-sm" />
              <span>Sign In</span>
            </motion.button>
          </div>
        </div>
      </div>


    </motion.header>
  );
};

export default Navbar;