"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FaSearch, 
  FaDiscord, 
  FaTwitter, 
  FaTwitch, 
  FaYoutube, 
  FaHeadset, 
  FaGamepad,
  FaCarCrash,
  FaPuzzlePiece
} from "react-icons/fa";
import { GiPistolGun, GiPlatform, GiSoccerBall, GiBrain, GiJoystick } from "react-icons/gi";

const Footer = () => {
  const categories = [
    {
      id: "all",
      name: "All Games",
      icon: <FaGamepad className="text-lg" />,
      color: "bg-gradient-to-r from-purple-500 to-indigo-600"
    },
    {
      id: "action",
      name: "Action",
      icon: <GiPistolGun className="text-lg" />,
      color: "bg-gradient-to-r from-red-500 to-orange-500"
    },
    {
      id: "adventure",
      name: "Adventure",
      icon: <GiPlatform className="text-lg" />,
      color: "bg-gradient-to-r from-green-500 to-teal-500"
    },
    {
      id: "sports",
      name: "Sports",
      icon: <GiSoccerBall className="text-lg" />,
      color: "bg-gradient-to-r from-blue-500 to-cyan-500"
    },
    {
      id: "racing",
      name: "Racing",
      icon: <FaCarCrash className="text-lg" />,
      color: "bg-gradient-to-r from-yellow-500 to-amber-500"
    },
    {
      id: "puzzle",
      name: "Puzzle",
      icon: <GiBrain className="text-lg" />,
      color: "bg-gradient-to-r from-pink-500 to-rose-500"
    },
  ];

  const socialLinks = [
    { icon: <FaDiscord />, color: "hover:bg-[#5865F2]", label: "Discord" },
    { icon: <FaTwitter />, color: "hover:bg-[#1DA1F2]", label: "Twitter" },
    { icon: <FaTwitch />, color: "hover:bg-[#9147FF]", label: "Twitch" },
    { icon: <FaYoutube />, color: "hover:bg-[#FF0000]", label: "YouTube" }
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer 
      className="bg-gray-900 border-t border-gray-800 pt-16 pb-8 mt-15"
      initial="hidden"
      whileInView="visible"
      variants={footerVariants}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-5">
              <GiJoystick className="text-3xl text-purple-500 mr-3" />
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                GAMEHUB
              </h3>
            </div>
            <p className="text-gray-400 mb-6">
              The ultimate destination for free online games. Play anywhere, anytime!
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 transition-colors ${social.color}`}
                  whileHover={{ y: -3 }}
                >
                  <span className="sr-only">{social.label}</span>
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Categories Column */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg text-white mb-6 flex items-center">
              <FaGamepad className="mr-2 text-purple-400" />
              Categories
            </h4>
            <ul className="space-y-3">
              {categories.slice(1).map((category) => (
                <motion.li 
                  key={category.id}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className={`w-8 h-8 rounded-full ${category.color} flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}>
                      {category.icon}
                    </span>
                    {category.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support Column */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg text-white mb-6 flex items-center">
              <FaHeadset className="mr-2 text-blue-400" />
              Support
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Help Center", path: "#" },
                { name: "Contact Us", path: "#" },
                { name: "FAQ", path: "#" },
                { name: "Community", path: "#" }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href={item.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Column */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg text-white mb-6 flex items-center">
              <FaPuzzlePiece className="mr-2 text-green-400" />
              Legal
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Terms of Service", path: "#" },
                { name: "Privacy Policy", path: "#" },
                { name: "Cookie Policy", path: "#" },
                { name: "Content Policy", path: "#" }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href={item.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div 
          className="border-t border-gray-800 my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />

        {/* Copyright */}
        <motion.div 
          className="text-center text-gray-500 text-sm"
          variants={itemVariants}
        >
          <p>
            © {new Date().getFullYear()} GameHub. All rights reserved. All games are property of their respective owners.
          </p>
          <p className="mt-2">
            Designed for gamers by gamers.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;