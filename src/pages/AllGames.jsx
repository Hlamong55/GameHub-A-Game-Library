import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import AllGamesCard from "../components/AllGamesCard";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";

const AllGames = () => {
  useEffect(() => {
    document.title = "Games | GameHub";
  }, []);

  const allData = useLoaderData();
  return (
    <div className="bg-gray-400 py-5">
      <div className="text-center mb-14">
        <h1 className="flex justify-center items-center gap-4 mt-14 text-6xl md:text-7xl font-extrabold tracking-wide">
          <motion.span
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-linear-to-r from-purple-600 via-pink-500 to-indigo-500 bg-clip-text text-transparent"
          >
            Explore
          </motion.span>
          <motion.span
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-linear-to-r from-pink-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent"
          >
            All Games
          </motion.span>
          <motion.div
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Gamepad2 size={70} className="text-indigo-500" />
          </motion.div>
        </h1>
      </div>

      <div className="grid w-11/12 mx-auto  grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 overflow-hidden">
        {allData.map((data) => (
          <AllGamesCard key={data.id} data={data}></AllGamesCard>
        ))}
      </div>
    </div>
  );
};

export default AllGames;
