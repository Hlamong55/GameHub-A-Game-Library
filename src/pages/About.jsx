import React, { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const About = () => {
  useEffect(() => {
    document.title = "About | GameHub";
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-b from-[#050509] via-[#0f0f1a] to-[#000000] text-gray-200 py-20 px-6 md:px-12">

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[200px] -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[180px]"></div>
      </div>

      {/* Header Section */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{
            opacity: 1,
            y: 0,
            textShadow: [
              "0 0 10px #facc15",
              "0 0 25px #facc15",
              "0 0 10px #facc15",
            ],
          }}
          transition={{
            duration: 1,
            textShadow: {
              repeat: Infinity,
              repeatType: "mirror",
              duration: 1,
            },
          }}
          className="text-5xl md:text-6xl font-extrabold tracking-wide"
        >
          <span className="text-yellow-300">About</span>{" "}
          <span className="text-white">GameHub</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-lg md:text-xl text-gray-400 mt-4 max-w-2xl mx-auto"
        >
         An engaging online library for discovering and supporting game developers.
        </motion.p>
      </div>

      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-center text-yellow-400 font-bold mb-10 tracking-widest"
      >
        ⚡ Level Up Every Moment ⚡
      </motion.div>


      {/* img + text Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-yellow-400/20 blur-3xl rounded-3xl"></div>
          <img
            src="https://i.ibb.co.com/fGPvWrSX/unnamed.jpg"
            alt="GameHub"
            className="relative rounded-3xl border border-yellow-500/30 shadow-[0_0_30px_rgba(250,204,21,0.3)]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-yellow-400 drop-shadow-[0_0_10px_#facc15]">
            Who We Are
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Welcome to <span className="text-yellow-300">GameHub</span>, your
            ultimate destination for immersive gameplay, thrilling news, and a
            passionate community of gamers from all corners of the world.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Whether you're a casual explorer or a hardcore competitor, our goal
            is to provide a universe where you can connect, discover, and
            conquer — one pixel at a time.
          </p>

          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 25px rgba(250,204,21,0.8)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-xl mt-6 px-8 py-3 bg-linear-to-r from-yellow-500 to-amber-400 text-black font-bold rounded-xl shadow-lg hover:shadow-yellow-400/50 transition"
          >
            Join The Hub
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
