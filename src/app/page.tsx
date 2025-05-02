// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { gameDetail } from "@/data/game.data";

// const HomePage = () => {
//   return (
//     <main className="container mx-auto px-4 py-10">
//       <h1 className="text-4xl font-bold text-center mb-1  bg-clip-text text-white">
//         Free Online Games
//       </h1>
//       <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
//         Play hundreds of free online games in your browser. No downloads required - instant play!
//       </p>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {gameDetail.map((game) => (
//           <Link
//             href={game.redirectUrl}
//             key={game._id}
//             aria-label={`Play ${game.name}`}
//             className="group"
//           >
//             <div className={`relative transition-all duration-300 hover:scale-105 hover:shadow-xl ${game.bigSize ? "lg:col-span-2" : ""}`}>
//               {/* Game Card */}
//               <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gray-700/50">
//                 <img
//                   src={game.imgUrl}
//                   alt={`${game.name} game thumbnail`}
//                   className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
//                   loading="lazy"
//                   width={340}
//                   height={255}
//                 />

//               </div>

//               {/* Game Info */}
//               <div className="mt-3">
//                 <h2 className="text-white font-semibold text-lg truncate">
//                   {game.name}
//                 </h2>
//                 <p className="text-gray-400 text-sm mt-1 line-clamp-3">
//                   {game.description}
//                 </p>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>

//     </main>
//   );
// };

// export default HomePage;
"use client";
import GameHeader from "@/components/GameHeader";
import GameCategories from "@/components/GamesCategory";
import NewReleasesSection from "@/components/NewReleases";
import { useState } from "react";
import {
  FaSearch,
  FaFire,
  FaGamepad,
  FaChessKnight,
  FaRunning,
  FaCarCrash,
  FaPuzzlePiece,
  FaHeadset,
} from "react-icons/fa";
import { GiPistolGun, GiPlatform, GiSoccerBall, GiBrain } from "react-icons/gi";
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

  const categories = [
    {
      id: "all",
      name: "All Games",
      icon: <FaGamepad className="text-xl" />,
      color: "from-purple-500 to-indigo-600",
    },
    {
      id: "action",
      name: "Action",
      icon: <GiPistolGun className="text-xl" />,
      color: "from-red-500 to-orange-500",
    },
    {
      id: "adventure",
      name: "Adventure",
      icon: <GiPlatform className="text-xl" />,
      color: "from-green-500 to-teal-500",
    },
    {
      id: "sports",
      name: "Sports",
      icon: <GiSoccerBall className="text-xl" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "racing",
      name: "Racing",
      icon: <FaCarCrash className="text-xl" />,
      color: "from-yellow-500 to-amber-500",
    },
    {
      id: "puzzle",
      name: "Puzzle",
      icon: <GiBrain className="text-xl" />,
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white w-full">
      <GameHeader searchQuery={searchQuery} setSearchQuery={searchQuery}/>


      <GameCategories
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold flex items-center">
            <FaFire className="mr-3 text-orange-400" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400">
              Trending Now
            </span>
          </h2>
          <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
            View All <span className="ml-1">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredGames.map((game) => (
            <div
              key={game.id}
              className="group relative rounded-xl overflow-hidden transition-all hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"></div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-400 rounded-xl z-20 transition-all pointer-events-none"></div>

              <img
                src={game.thumbnail}
                alt={game.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute bottom-0 left-0 right-0 z-30 p-4">
                <div className="flex space-x-2 mb-2">
                  {game.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-900 bg-opacity-70 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-bold text-lg">{game.title}</h3>
                <p className="text-sm text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  {game.players} players
                </p>
              </div>

              <button className="absolute top-4 right-4 bg-gray-900 bg-opacity-70 hover:bg-purple-600 text-white p-2 rounded-full z-30 transition-colors">
                <FaGamepad />
              </button>
            </div>
          ))}
        </div>
      </section>

      <NewReleasesSection featuredGames={featuredGames} />
    </div>
  );
};

export default HomePage;
