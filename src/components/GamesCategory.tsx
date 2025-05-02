import { motion } from "framer-motion";
import {
  FaGamepad,
  FaChessKnight,
  FaRunning,
  FaCarCrash,
  FaPuzzlePiece,
} from "react-icons/fa";
import {
  GiPistolGun,
  GiPlatform,
  GiSoccerBall,
  GiBrain,
  GiJoystick,
} from "react-icons/gi";

const GameCategories = ({
  activeCategory,
  setActiveCategory,
}: {
  activeCategory: any;
  setActiveCategory: any;
}) => {
  const categories = [
    {
      id: "all",
      name: "All Games",
      icon: <GiJoystick className="text-2xl" />,
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-gradient-to-r from-purple-500 to-indigo-600",
    },
    {
      id: "action",
      name: "Action",
      icon: <GiPistolGun className="text-2xl" />,
      color: "from-red-500 to-orange-500",
      bgColor: "bg-gradient-to-r from-red-500 to-orange-500",
    },
    {
      id: "adventure",
      name: "Adventure",
      icon: <GiPlatform className="text-2xl" />,
      color: "from-green-500 to-teal-500",
      bgColor: "bg-gradient-to-r from-green-500 to-teal-500",
    },
    {
      id: "sports",
      name: "Sports",
      icon: <GiSoccerBall className="text-2xl" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
    {
      id: "racing",
      name: "Racing",
      icon: <FaCarCrash className="text-2xl" />,
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-gradient-to-r from-yellow-500 to-amber-500",
    },
    {
      id: "puzzle",
      name: "Puzzle",
      icon: <GiBrain className="text-2xl" />,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-gradient-to-r from-pink-500 to-rose-500",
    },
    {
      id: "strategy",
      name: "Strategy",
      icon: <FaChessKnight className="text-2xl" />,
      color: "from-purple-600 to-blue-600",
      bgColor: "bg-gradient-to-r from-purple-600 to-blue-600",
    },
    {
      id: "arcade",
      name: "Arcade",
      icon: <FaGamepad className="text-2xl" />,
      color: "from-green-600 to-yellow-500",
      bgColor: "bg-gradient-to-r from-green-600 to-yellow-500",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-[100px] opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-600 rounded-full filter blur-[120px] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12"
        >
          <div className="flex items-center mb-6 md:mb-0">
            <FaGamepad className="text-4xl text-purple-400 mr-4" />
            <h2 className="text-4xl font-bold text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Game Categories
              </span>
            </h2>
          </div>
          <p className="text-lg text-gray-400 max-w-xl">
            Browse our extensive collection of games across all popular categories
          </p>
        </motion.div>

        {/* Categories grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variants={item}
              whileHover="hover"
              className={`group relative overflow-hidden rounded-2xl p-0.5 ${
                activeCategory === category.id ? category.bgColor : "bg-gray-800"
              }`}
            >
              <div className="bg-gray-900 hover:bg-gray-800 rounded-xl p-6 transition-all h-full flex flex-col items-center">
                <div className={`mb-4 p-4 rounded-full ${category.bgColor} w-max group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold text-lg text-center text-white">{category.name}</h3>
                {activeCategory === category.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-white"
                    layoutId="activeCategory"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full font-bold transition-all border border-gray-700 hover:border-gray-600 flex items-center">
            View All Categories
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
    // <section className="container mx-auto px-4 py-12">
    //   <h2 className="text-3xl font-bold mb-8 flex items-center">
    //     <FaGamepad className="mr-3 text-purple-400" />
    //     <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
    //       Game Categories
    //     </span>
    //   </h2>
    //   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
    //     {categories.map((category) => (
    //       <button
    //         key={category.id}
    //         onClick={() => setActiveCategory(category.id)}
    //         className={`group relative overflow-hidden rounded-xl p-1 ${
    //           activeCategory === category.id
    //             ? "bg-gradient-to-r " + category.color
    //             : "bg-gray-800"
    //         }`}
    //       >
    //         <div className="bg-gray-800 hover:bg-gray-700 rounded-lg p-4 transition-all h-full">
    //           <div
    //             className={`mx-auto mb-3 p-3 rounded-full bg-gradient-to-r ${category.color} w-max`}
    //           >
    //             {category.icon}
    //           </div>
    //           <h3 className="font-medium text-center">{category.name}</h3>
    //         </div>
    //       </button>
    //     ))}
    //   </div>
    // </section>
  );
};

export default GameCategories;
