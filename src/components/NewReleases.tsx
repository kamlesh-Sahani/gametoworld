"use client";

import { useRef } from "react";
import { motion} from "framer-motion";
import { FaStar, FaPlay } from "react-icons/fa";
import { GiGamepad } from "react-icons/gi";

const NewReleasesSection = ({ featuredGames }: any) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      y: -10,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section className="relative overflow-hidden mt-6 md:mt-12">
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div className="absolute top-20 left-4 md:left-10 w-20 h-20 md:w-32 md:h-32 bg-purple-600 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 right-4 md:right-20 w-24 h-24 md:w-40 md:h-40 bg-cyan-600 rounded-full filter blur-3xl opacity-20"></div>
    </div>
  
    <div className="flex flex-col justify-center items-center px-2 sm:px-4">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl mb-8 md:mb-12 px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center mb-4 md:mb-0"
        >
          <GiGamepad className="text-purple-500 text-3xl md:text-4xl mr-2 md:mr-4" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              New Releases (coming soon..)
            </span>
          </h2>
        </motion.div>
  
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex space-x-2 sm:space-x-4"
        >
          <button className="px-4 py-1 sm:px-6 sm:py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full font-medium transition-all border border-gray-700 text-sm sm:text-base">
            View All
          </button>
        </motion.div>
      </div>
  
      <div className="relative w-full max-w-7xl">
        <motion.div
          ref={scrollerRef}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 px-2 sm:px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {featuredGames.map((game: any, i: any) => (
            <motion.div
              key={`new-${i}`}
              className="flex-shrink-0 w-full sm:w-64 md:w-72 lg:w-80 px-1 sm:px-3 snap-start"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="bg-gray-800 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all overflow-hidden group h-full flex flex-col border border-gray-700"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="relative pt-[56.25%] overflow-hidden">
                  <motion.img
                    src={game.thumbnail}
                    alt={game.title}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    loading="lazy"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  {game.isNew && (
                    <motion.div
                      className="absolute top-2 left-2 md:top-4 md:left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-full shadow-lg"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      NEW RELEASE
                    </motion.div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3 md:p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 md:space-x-3">
                        <div className="flex items-center bg-gray-900 bg-opacity-80 px-1.5 py-0.5 md:px-2 md:py-1 rounded-full">
                          <FaStar className="text-yellow-400 mr-0.5 md:mr-1 text-xs md:text-sm" />
                          <span className="text-xs md:text-sm font-medium text-white">
                            {game.rating}
                          </span>
                        </div>
                        <span className="text-white/80 text-xs md:text-sm">
                          {game.players} players
                        </span>
                      </div>
                      <span className="text-white/80 text-xs md:text-sm flex items-center">
                        <FaPlay className="mr-0.5 md:mr-1 text-[0.6rem] md:text-xs" />
                        {game.playTime}
                      </span>
                    </div>
                  </div>
                </div>
  
                <div className="p-3 md:p-5 flex-grow flex flex-col">
                  <h3 className="font-bold text-lg md:text-xl mb-1 md:mb-2 text-white line-clamp-1">
                    {game.title}
                  </h3>
                  <div className="flex flex-wrap gap-1 md:gap-2 mb-2 md:mb-4">
                    {game.tags.map((tag: any, i: any) => (
                      <motion.span
                        key={i}
                        className="text-xs bg-gray-700 text-gray-200 px-2 py-0.5 md:px-3 md:py-1 rounded-full"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
  
                  <div className="mt-auto">
                    <motion.button
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-2 md:py-3 rounded-md md:rounded-lg font-medium flex items-center justify-center group text-sm md:text-base"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="group-hover:scale-110 transition-transform">
                        Play Now
                      </span>
                      <FaPlay className="ml-1 md:ml-2 text-[0.6rem] md:text-xs opacity-0 group-hover:opacity-100 transition-all transform -translate-x-1 group-hover:translate-x-0" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default NewReleasesSection;
