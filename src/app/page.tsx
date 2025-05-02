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
"use client"
import { useState } from 'react';
import { FaSearch, FaFire, FaGamepad, FaChessKnight, FaRunning, FaCarCrash, FaPuzzlePiece, FaHeadset } from 'react-icons/fa';
import { GiPistolGun, GiPlatform, GiSoccerBall, GiBrain } from 'react-icons/gi';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Game data with high-quality gaming thumbnails
  const featuredGames = [
    { 
      id: 1, 
      title: 'Neon Speed Drift', 
      thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', 
      category: 'racing', 
      players: '4.2M', 
      tags: ['Multiplayer', '3D'] 
    },
    { 
      id: 2, 
      title: 'Cosmic Puzzle Quest', 
      thumbnail: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', 
      category: 'puzzle', 
      players: '2.8M', 
      tags: ['Brain Teaser', 'Relaxing'] 
    },
    { 
      id: 3, 
      title: 'Battle Royale Legends', 
      thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', 
      category: 'action', 
      players: '8.5M', 
      tags: ['Shooter', 'PVP'] 
    },
    { 
      id: 4, 
      title: 'Stellar Soccer 2023', 
      thumbnail: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', 
      category: 'sports', 
      players: '3.6M', 
      tags: ['Competitive', '3D'] 
    },
  ];
  
  const categories = [
    { id: 'all', name: 'All Games', icon: <FaGamepad className="text-xl" />, color: 'from-purple-500 to-indigo-600' },
    { id: 'action', name: 'Action', icon: <GiPistolGun className="text-xl" />, color: 'from-red-500 to-orange-500' },
    { id: 'adventure', name: 'Adventure', icon: <GiPlatform className="text-xl" />, color: 'from-green-500 to-teal-500' },
    { id: 'sports', name: 'Sports', icon: <GiSoccerBall className="text-xl" />, color: 'from-blue-500 to-cyan-500' },
    { id: 'racing', name: 'Racing', icon: <FaCarCrash className="text-xl" />, color: 'from-yellow-500 to-amber-500' },
    { id: 'puzzle', name: 'Puzzle', icon: <GiBrain className="text-xl" />, color: 'from-pink-500 to-rose-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white w-full">
      {/* Glowing Header */}
      <header className="relative bg-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-blue-900 opacity-20"></div>
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              PLAY INSTANT GAMES
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              No downloads. No installs. Just click and play!
            </p>
            
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-md opacity-30"></div>
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Find your next favorite game..."
                  className="w-full py-4 px-6 rounded-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-600"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="absolute right-3 bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-full hover:scale-110 transition-transform">
                  <FaSearch className="text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Pulsing Game Categories */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <FaGamepad className="mr-3 text-purple-400" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Game Categories
          </span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group relative overflow-hidden rounded-xl p-1 ${activeCategory === category.id ? 'bg-gradient-to-r ' + category.color : 'bg-gray-800'}`}
            >
              <div className="bg-gray-800 hover:bg-gray-700 rounded-lg p-4 transition-all h-full">
                <div className={`mx-auto mb-3 p-3 rounded-full bg-gradient-to-r ${category.color} w-max`}>
                  {category.icon}
                </div>
                <h3 className="font-medium text-center">{category.name}</h3>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Games - Card Hover Effects */}
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
            <div key={game.id} className="group relative rounded-xl overflow-hidden transition-all hover:-translate-y-2">
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
                    <span key={i} className="text-xs bg-gray-900 bg-opacity-70 px-2 py-1 rounded">
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

      {/* New Releases Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            New Releases
          </span>
        </h2>
        
        <div className="relative">
          <div className="flex overflow-x-auto pb-6 space-x-6 scrollbar-hide">
            {[...featuredGames, ...featuredGames].map((game, i) => (
              <div key={`new-${i}`} className="flex-shrink-0 w-64 rounded-xl overflow-hidden bg-gray-800 hover:bg-gray-700 transition-all group">
                <div className="relative h-36 overflow-hidden">
                  <img 
                    src={game.thumbnail} 
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-1">{game.title}</h3>
                  <p className="text-sm text-gray-400 mb-3">{game.category}</p>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 rounded-lg hover:opacity-90 transition-opacity">
                    Play Free
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Futuristic Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  GAMEHUB
                </span>
              </h3>
              <p className="text-gray-400">
                The ultimate destination for free online games. Play anywhere, anytime!
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Categories</h4>
              <ul className="space-y-2">
                {categories.slice(1).map((category) => (
                  <li key={category.id}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                      <span className="mr-2">{category.icon}</span>
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-700 hover:bg-purple-600 flex items-center justify-center transition-colors">
                  <span className="sr-only">Discord</span>
                  <FaHeadset />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-700 hover:bg-blue-500 flex items-center justify-center transition-colors">
                  <span className="sr-only">Twitter</span>
                  <FaGamepad />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} GameHub. All games are property of their respective owners.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;