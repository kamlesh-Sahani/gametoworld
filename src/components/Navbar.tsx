import React from "react";

const Navbar = () => {
  return (
    <header className="bg-black text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg">
            {/* Replace with your actual logo */}
            <span className="text-2xl font-bold text-purple-600">G</span>
          </div>
          <h1 className="text-2xl font-bold">gameToworld</h1>
        </div>

        <nav className="hidden md:flex space-x-6">
          <a href="/solo" className="hover:text-gray-200 transition">
            Solo Games
          </a>
          <a href="/multiplayer" className="hover:text-gray-200 transition">
            Multiplayer
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
