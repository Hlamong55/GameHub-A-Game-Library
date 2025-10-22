import React from "react";
import { Gamepad2, Twitter, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-slate-900 via-indigo-900 to-purple-900 text-gray-300 pt-10 pb-5 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between md:items-start gap-10">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Gamepad2 size={50} className="text-yellow-400" />
              <h2 className="text-4xl font-extrabold text-yellow-400">GameHub</h2>
            </div>
            <p className="  max-w-md text-gray-400">
              An engaging online library for discovering and supporting game developers. GameHub brings 
              community-powered feedback to the world of gaming.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-white text-center">Connect</h3>
            <div className="flex gap-4 justify-center text-gray-400">
              <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
                <Twitter size={25} />
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
                <Facebook size={25} />
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
                <Instagram size={25} />
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
                <Youtube size={28} />
              </a>
            </div>
          </div>
        </div>

        <div className="my-6 border-t border-gray-500"></div>

        <div className="text-center text-sm text-gray-300">
          © {new Date().getFullYear()} <span className="text-yellow-300 font-semibold">GameHub</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
