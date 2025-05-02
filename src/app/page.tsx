import React from "react";
import Link from "next/link";
import { gameDetail } from "@/data/game.data";
const HomePage = () => {
  return (
    <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">Free Online Games</h1>
        <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
          Play hundreds of free online games in your browser. No downloads required - instant play!
        </p>
        
        <div className="flex flex-wrap gap-6 justify-center">
          {gameDetail.map((game) => (
            <Link 
              href={game.redirectUrl} 
              key={game._id}
              aria-label={`Play ${game.name}`}
              className="group"
            >
              <div className={`${game.bigSize ? "w-[200px]" : "w-[170px]"} transition-transform duration-200 hover:scale-105`}>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={game.imgUrl}
                    alt={`${game.name} game thumbnail`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={game.bigSize ? 200 : 170}
                    height={game.bigSize ? 200 : 170}
                  />
               
                </div>
                <h2 className="text-center mt-2 text-gray-300 font-medium truncate">
                  {game.name}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </main>
  );
};

export default HomePage;
