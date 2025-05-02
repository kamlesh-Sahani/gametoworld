'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [games, setGames] = useState([]);
  const [featuredGames, setFeaturedGames] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Mock data - in a real app, you'd fetch this from an API
    const mockGames = [
      { id: 1, title: 'Subway Surfers', category: 'Adventure', thumbnail: '/game1.jpg', plays: '1.2B' },
      { id: 2, title: 'Stickman Hook', category: 'Puzzle', thumbnail: '/game2.jpg', plays: '850M' },
      { id: 3, title: 'Temple Run 2', category: 'Adventure', thumbnail: '/game3.jpg', plays: '1.5B' },
      { id: 4, title: 'Basketball Stars', category: 'Sports', thumbnail: '/game4.jpg', plays: '320M' },
      { id: 5, title: 'Slither.io', category: 'Multiplayer', thumbnail: '/game5.jpg', plays: '980M' },
      { id: 6, title: 'Paper.io 2', category: 'Strategy', thumbnail: '/game6.jpg', plays: '750M' },
      { id: 7, title: 'Moto X3M', category: 'Racing', thumbnail: '/game7.jpg', plays: '1.1B' },
      { id: 8, title: '8 Ball Pool', category: 'Sports', thumbnail: '/game8.jpg', plays: '1.3B' },
    ];

    const mockCategories = [
      { id: 1, name: 'Action', icon: '🎮' },
      { id: 2, name: 'Adventure', icon: '🏕️' },
      { id: 3, name: 'Puzzle', icon: '🧩' },
      { id: 4, name: 'Sports', icon: '⚽' },
      { id: 5, name: 'Multiplayer', icon: '👥' },
      { id: 6, name: 'Strategy', icon: '♟️' },
      { id: 7, name: 'Racing', icon: '🏎️' },
      { id: 8, name: 'Retro', icon: '👾' },
    ];

    setGames(mockGames);
    setFeaturedGames(mockGames.slice(0, 4));
    setCategories(mockCategories);
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <Head>
        <title>GameHub - Play Free Online Games</title>
        <meta name="description" content="Play free online games at GameHub" />
      </Head>

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold">GameHub</h1>
          </div>
          
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-200 transition">Home</a>
            <a href="#" className="hover:text-gray-200 transition">Categories</a>
            <a href="#" className="hover:text-gray-200 transition">Top Games</a>
            <a href="#" className="hover:text-gray-200 transition">New Games</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-800/30 transition"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition">
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-gray-950 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 dark:text-white">Play Free Online Games</h2>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
            Thousands of games to explore. No downloads, no ads, just instant fun!
          </p>
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search for games..."
              className="w-full px-6 py-4 rounded-full border-0 shadow-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            />
            <button className="absolute right-2 top-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-12 bg-gray-200/50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold dark:text-white">Featured Games</h3>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">View All</a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredGames.map(game => (
              <div key={game.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="relative pb-[75%]">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 flex items-center justify-center">
                    <span className="text-4xl">🎮</span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-lg dark:text-white">{game.title}</h4>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{game.category}</span>
                    <span className="text-sm font-medium dark:text-gray-300">{game.plays} plays</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8 dark:text-white">Categories</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.map(category => (
              <div key={category.id} className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition cursor-pointer">
                <div className="text-3xl mb-2">{category.icon}</div>
                <h4 className="font-medium dark:text-white">{category.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Games */}
      <section className="py-12 bg-gray-200/50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold dark:text-white">Popular Games</h3>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-white dark:bg-gray-800 rounded-md font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                Most Played
              </button>
              <button className="px-4 py-2 bg-white dark:bg-gray-800 rounded-md font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                Newest
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {games.map(game => (
              <div key={game.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="relative pb-[75%]">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 flex items-center justify-center">
                    <span className="text-4xl">🎮</span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-lg dark:text-white">{game.title}</h4>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{game.category}</span>
                    <span className="text-sm font-medium dark:text-gray-300">{game.plays} plays</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">GameHub</h4>
              <p className="text-gray-400">The best place to play free online games.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Categories</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Action</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Adventure</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Puzzle</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Sports</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2023 GameHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}