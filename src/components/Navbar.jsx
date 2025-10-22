import React from "react";
import { Link, NavLink } from "react-router";
import { Gamepad2, LogIn, UserPlus } from "lucide-react";

const Navbar = () => {
  const navLinks = (
    <>
      <li><NavLink to="/" className="hover:text-yellow-400">Home</NavLink></li>
      <li><NavLink to="/allGames" className="hover:text-yellow-400">Games</NavLink></li>
      <li><NavLink to="/about" className="hover:text-yellow-400">About</NavLink></li>
      <li><NavLink to="/support" className="hover:text-yellow-400">Support</NavLink></li>
    </>
  );

  return (
    <nav className="navbar bg-linear-to-r from-slate-900 via-indigo-900 to-purple-900 text-white shadow-lg px-10 py-3">
      <div className="navbar-start">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold tracking-widest text-yellow-400">
          <Gamepad2 size={30} />
          <span>GameHub</span>
        </Link>
      </div>

     
      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          <button tabIndex={0} className="btn btn-ghost text-yellow-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-1 p-3 shadow bg-base-200 text-base-content rounded-box w-52 font-semibold">
            {navLinks}
            <li><NavLink to="/login"><LogIn size={18} /> Login</NavLink></li>
            <li><NavLink to="/register"><UserPlus size={18} /> Register</NavLink></li>
          </ul>
        </div>
      </div>


      <div className="navbar-end hidden lg:flex items-center gap-6">
        <ul className="menu menu-horizontal px-1 font-semibold text-sm">
          {navLinks}
        </ul>
        <NavLink
          to="/login"
          className="btn btn-sm font-bold bg-yellow-400 hover:bg-amber-600 text-black hover:text-white flex items-center gap-1">
          <LogIn size={18} /> Login
        </NavLink>
        <NavLink
          to="/register"
          className="btn btn-sm font-bold bg-yellow-400 hover:bg-amber-600 hover:text-white text-black flex items-center gap-1">
          <UserPlus size={18} /> Register
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
