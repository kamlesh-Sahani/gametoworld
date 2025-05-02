import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href={"/"}>
          <h1 className="text-2xl font-bold">
            game<span className="text-[#9C27B0]">To</span>world
          </h1>
        </Link>

        <div className="flex items-center space-x-4">
          <button className="bg-[#9C27B0] text-white w-[110px] h-[40px] rounded font-semibold cursor-pointer">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
