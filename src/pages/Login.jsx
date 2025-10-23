import React, { useEffect } from "react";
import bgImage from "../assets/collected/car9.jpeg";
import { Link } from "react-router";

const Login = () => {
    useEffect(() => {
          document.title = "Login | GameHub";
        }, []);


  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex items-center justify-center px-4 py-12 min-h-screen"
    >
      <div className="bg-white/80 dark:bg-black/60 backdrop-blur-md p-10 rounded-3xl max-w-md w-full shadow-2xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Login to your GameHub Account
        </h2>

        <form className="space-y-6">
          {/* Email Field */}
          <div>
            <label className="block font-medium text-gray-800 dark:text-gray-200 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block font-medium text-gray-800 dark:text-gray-200 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-linear-to-r from-slate-900 via-indigo-900 to-purple-900 hover:from-indigo-700 hover:to-pink-600 text-white font-bold py-3 rounded-lg shadow-md transition-all duration-500 ease-in-out transform hover:shadow-[0_0_15px_rgba(255,0,120,0.6)]"
          >
            Login
          </button>
        </form>

        {/* Google Login */}
        <div className="mt-6 text-center">
          <button className="flex items-center justify-center gap-2 w-full bg-red-600  text-white border border-gray-300 hover:bg-black font-medium py-3 rounded-lg shadow-sm transition-all duration-300">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span>Sign up with Google</span>
          </button>
        </div>


        <p className="mt-6 text-center text-gray-800 ">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-red-600 hover:text-red-700 font-semibold underline"
          >
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
