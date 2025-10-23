// src/pages/NotFound.jsx
import { Gamepad2 } from "lucide-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "404 Not Found | GameHub";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-gray-900 via-zinc-900 to-black px-6">
      <div className="max-w-5xl w-full bg-linear-to-r from-zinc-800/60 to-black/60 backdrop-blur-md border border-zinc-700 rounded-2xl p-8 md:p-12 text-center shadow-[0_10px_40px_rgba(0,0,0,0.7)]">
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-none">
            <div className="text-7xl md:text-9xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-amber-300 to-yellow-200 flicker">
              404
            </div>
            <div className="mt-2 text-lg text-gray-400">Page Not Found</div>
          </div>

          <div className="flex-1 text-left md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-3.5">
              Oops — we couldn't find that page.
            </h1>
            <p className="text-gray-300 mb-14 leading-relaxed">
              Maybe the link is broken, or the page was removed. But hey — the
              game goes on. Try returning home, or explore our top-rated games.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
              <button
                onClick={() => navigate("/")}
                className="inline-block px-6 py-3 rounded-full text-black font-bold bg-linear-to-r from-yellow-500 via-amber-400 to-yellow-300 hover:from-amber-500 hover:to-yellow-400 transition transform hover:-translate-y-1 shadow-lg"
              >
                Go Home
              </button>

              <button
                onClick={() => navigate("/allGames")}
                className="inline-block px-6 py-3 rounded-full text-yellow-300 font-semibold border border-yellow-400 hover:bg-yellow-400/10 transition"
              >
                Browse Top Games
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 flex items-center justify-center gap-3 text-gray-400">
          <span className="flex gap-2 items-center">GameHub — keep playing <Gamepad2></Gamepad2></span>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
