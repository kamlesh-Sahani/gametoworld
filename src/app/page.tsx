import React from "react";
import Link from "next/link";
import { gameDetail } from "@/data/game.data";
const HomePage = () => {
  return (
    <div className="flex flex-wrap gap-5 pt-10">
      {gameDetail && gameDetail.map((game) => (
        <Link href={game.redirectUrl} key={game._id}>
          <div className={` ${game.bigSize?"w-[200px] h-[200px]":"w-[170px] h-[170px]"} rounded-2xl cursor-pointer hover:scale-108 duration-140 ease-in justify-center items-center`}>
            <img
              src={game.imgUrl}
              alt="game"
              className="w-full h-full object-cover rounded-2xl"
            />
            <h4 className="text-center truncate">{game.name}</h4>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
