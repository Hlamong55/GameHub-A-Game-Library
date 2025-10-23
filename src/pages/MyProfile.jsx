import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { AuthContext } from "../routes/AuthProvider";
import { LogOut } from "lucide-react";
import bgImg from "../assets/collected/loginnBanner.jpg";

const MyProfile = () => {
  useEffect(() => {
    document.title = "My Profile | GameHub";
  }, []);

  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logOut();
    navigate("/");
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white px-4 py-10"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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
        <span className="text-yellow-300">🎮 Welcome, Gamer!</span>{" "}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="text-lg md:text-xl font-extrabold text- bg-black mb-8 mt-3 max-w-2xl mx-auto rounded-full px-4 py-2.5"
      >
        Level Up Your Adventure ⚡
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-gray-800/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl max-w-md w-full text-center border border-yellow-400/30"
      >
        <motion.img
          src={user?.photoURL || "https://via.placeholder.com/120"}
          alt={user?.displayName || "Profile"}
          className="w-44 h-44 rounded-full mx-auto mb-5 shadow-lg border-4 border-yellow-400/60 object-cover"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 200 }}
        />

        <motion.h2
          className="text-4xl font-extrabold mb-3 text-yellow-400 drop-shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {user?.displayName || "No Name"}
        </motion.h2>

        <p className="text-gray-300 text-lg mb-8 tracking-wide">{user?.email}</p>

        <div className="flex justify-center gap-6">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(250,204,21,0.8)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => navigate("/updateProfile")}
            className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-500 transition-all"
          >
            Update Info
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(239,68,68,0.8)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg flex items-center gap-2"
          >
            <LogOut size={18} /> Logout
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default MyProfile;
