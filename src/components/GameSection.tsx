import React from 'react';
import { gameDetail } from '@/data/game.data';
import Image from 'next/image';
import Link from 'next/link';

const GameSection = () => {
  return (
    <section className="mt-10 mb-14">

      <div className="flex flex-wrap gap-7 justify-center items-center">
        {gameDetail?.map((game) => (
          <Link 
            href={game.redirectUrl} 
            key={game._id}
            className="group relative block overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
            aria-label={`Play ${game.name}`}
          >
            <div className="relative aspect-video w-full">
              <Image
                src={game.imgUrl}
                alt={game.name}
                width={300}
                height={300}
                className="object-cover transition-opacity group-hover:opacity-90"
                placeholder="blur"
                blurDataURL="/placeholder-game.png" // Add a small placeholder image
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80" />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="font-semibold truncate text-lg drop-shadow-md">{game.name}</h3>
              <div className="flex justify-between items-center mt-1 text-sm">
                <span className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {game.rating || '4.5'}
                </span>
                <span className="bg-purple-600 px-2 py-1 rounded-full text-xs">
                  {game.category[0] || 'Adventure'}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default GameSection;