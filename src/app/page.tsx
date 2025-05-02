import React from "react";
import Link from "next/link";
import Image from "next/image";
import { gameDetail } from "@/data/game.data";


const HomePage = () => {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-1  bg-clip-text text-white">
        Free Online Games
      </h1>
      <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
        Play hundreds of free online games in your browser. No downloads required - instant play!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {gameDetail.map((game) => (
          <Link 
            href={game.redirectUrl} 
            key={game._id}
            aria-label={`Play ${game.name}`}
            className="group"
          >
            <div className={`relative transition-all duration-300 hover:scale-105 hover:shadow-xl ${game.bigSize ? "lg:col-span-2" : ""}`}>
              {/* Game Card */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gray-700/50">
                <img
                  src={game.imgUrl}
                  alt={`${game.name} game thumbnail`}
                  className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                  loading="lazy"
                  width={340}
                  height={255}
                />
           
              </div>
              
              {/* Game Info */}
              <div className="mt-3">
                <h2 className="text-white font-semibold text-lg truncate">
                  {game.name}
                </h2>
                <p className="text-gray-400 text-sm mt-1 line-clamp-3">
                  {game.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </main>
  );
};

export default HomePage;