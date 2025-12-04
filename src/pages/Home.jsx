import React, { useEffect } from "react";
import Banner from "../components/Banner";
import { useLoaderData, useNavigate } from "react-router";
import GameCard from "../components/GameCard";
import { Gamepad2 } from "lucide-react";
import Newsletter from "../components/NewsLetter";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Home = () => {
  useEffect(() => {
    document.title = "Home | GameHub";
  }, []);

  const gamesData = useLoaderData();
  const navigate = useNavigate();

  const handleSeeAll = () => {
    navigate("/allGames");
  };

  return (
    <div className="bg-gray-400">
      <Banner />

      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{
            opacity: 1,
            y: 0,
            textShadow: [
              "0 0 10px #a855f7",
              "0 0 20px #6366f1",
              "0 0 30px #9333ea",
            ],
          }}
          transition={{
            duration: 1,
            textShadow: {
              repeat: Infinity,
              repeatType: "mirror",
              duration: 1.2,
            },
          }}
          className="flex justify-center items-center text-6xl font-extrabold 
               bg-linear-to-r from-slate-900 via-indigo-900 to-purple-500 
               bg-clip-text text-transparent gap-3 mt-14 tracking-wide"
        >
          Popular Games
          <Gamepad2
            size={70}
            className="text-purple-500 drop-shadow-[0_0_10px_#a855f7]"
          />
        </motion.h1>
      </div>

      <div className="grid w-11/12 mx-auto mt-6 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 overflow-hidden">
        {[...gamesData]
          ?.filter((game) => game.ratings >= 4.5 && game.ratings <= 5)
          .slice(0, 8)
          ?.map((game) => (
            <GameCard key={game?.id} game={game} />
          ))}
      </div>

      <div className="flex justify-center py-14">
        <button
          onClick={handleSeeAll}
          className="btn text-lg bg-linear-to-r from-yellow-700 via-amber-400 to-yellow-300 text-black font-bold hover:from-amber-500 hover:via-yellow-400 hover:to-amber-500 hover:text-gray-700 transition-all duration-300 px-10 py-7 rounded-lg shadow-md mt-5"
        >
          See All Games 🎮
        </button>
      </div>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
