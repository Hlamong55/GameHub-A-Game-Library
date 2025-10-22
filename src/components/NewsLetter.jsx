import React, { useState } from "react";
import bgBanner from "../assets/collected/banner.avif"
import { Gamepad2 } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter a valid email.");
    alert(`Thank you for subscribing!❤️`);
    setEmail("");
  };

  return (
    <div className=" mx-auto  p-20  text-white"
    style={{
                    backgroundImage: `url(${bgBanner})`,
                    opacity:"unset"
                  }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="flex items-center gap-3 justify-center text-3xl md:text-4xl font-extrabold mb-4 drop-shadow-lg">
          Stay Updated with GameHub <Gamepad2 size={80}></Gamepad2>
        </h2>
        <p className="text-lg mb-8 text-gray-200 font-medium">
          Subscribe to get the latest indie games, updates, and offers delivered
          straight to your inbox.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-2/3 px-5 py-3 rounded-xl text-gray-200 bg-transparent border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 font-bold rounded-xl bg-linear-to-r from-yellow-700 via-amber-400 to-yellow-300 text-black hover:from-amber-500 hover:via-yellow-400 hover:to-amber-500 hover:text-gray-700 transition-all duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
