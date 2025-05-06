"use client";
import GameSection from "@/components/GameSection";
import GameHeader from "@/components/MidSection";
import NewReleasesSection from "@/components/NewReleases";
import { useState } from "react";
import { FaFire, FaGamepad } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  GiPistolGun,
  GiPlatform,
  GiSoccerBall,
  GiBrain,
  GiJoystick,
} from "react-icons/gi";
interface Game {
  id: number;
  title: string;
  thumbnail: string;
  category: string;
  players: string;
  rating: number;
  tags: string[];
  isNew: boolean;
  playTime: string;
}

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState("all");
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
  const featuredGames = [
    {
      id: 1,
      title: "Neon Speed Drift",
      thumbnail:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "racing",
      players: "4.2M",
      tags: ["Multiplayer", "3D"],
    },
    {
      id: 2,
      title: "Cosmic Puzzle Quest",
      thumbnail:
        "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "puzzle",
      players: "2.8M",
      tags: ["Brain Teaser", "Relaxing"],
    },
    {
      id: 3,
      title: "Battle Royale Legends",
      thumbnail:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "action",
      players: "8.5M",
      tags: ["Shooter", "PVP"],
    },
    {
      id: 4,
      title: "Stellar Soccer 2023",
      thumbnail:
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "sports",
      players: "3.6M",
      tags: ["Competitive", "3D"],
    },
  ];
  return (
    <div className="relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-purple-600 rounded-full filter blur-[50px] md:blur-[100px] opacity-20 animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-blue-600 rounded-full filter blur-[60px] md:blur-[120px] opacity-15 animate-float-delay"></div>
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Hero section */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center mb-10 md:mb-16"
        >
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center mb-6">
            <motion.div variants={itemVariants}>
              <GiJoystick className="text-4xl sm:text-5xl md:text-6xl text-purple-400/80" />
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 leading-tight"
            >
              PLAY INSTANT GAMES
            </motion.h1>
          </div>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            No downloads. No installs. Just click and play your favorite games
            instantly!
          </motion.p>
        </motion.div>

        {/* Game sections */}
        <div className="space-y-16 md:space-y-20">
          <GameSection />

          <GameHeader
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          {/* Trending section */}
          <section>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-8 gap-3 sm:gap-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center">
                <FaFire className="mr-2 sm:mr-3 text-orange-400 text-lg sm:text-xl" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400">
                  Trending Now
                </span>
              </h2>
              <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors text-sm sm:text-base">
                View All <span className="ml-1">→</span>
              </button>
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
              {featuredGames.map((game) => (
                <motion.div
                  key={game.id}
                  whileHover={{ y: -5 }}
                  className="group relative rounded-lg md:rounded-xl overflow-hidden transition-all shadow-lg hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3]">
                    <img
                      src={game.thumbnail}
                      alt={game.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 z-10 p-3 sm:p-4">
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-2">
                      {game.tags.slice(0, 2).map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gray-900/90 text-gray-200 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-bold text-sm sm:text-base md:text-lg text-white line-clamp-1">
                      {game.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 flex items-center mt-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-1 sm:mr-2 animate-pulse"></span>
                      {game.players} players
                    </p>
                  </div>

                  <button
                    className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-gray-900/80 hover:bg-purple-600 text-white p-1.5 sm:p-2 rounded-full z-10 transition-colors backdrop-blur-sm"
                    aria-label={`Play ${game.title}`}
                  >
                    <FaGamepad className="text-xs sm:text-sm" />
                  </button>
                </motion.div>
              ))}
            </div>
          </section>

          {/* New Releases section */}
          <NewReleasesSection featuredGames={featuredGames} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
