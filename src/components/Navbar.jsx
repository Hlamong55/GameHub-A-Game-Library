import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Gamepad2, LogIn, UserPlus, LogOut } from "lucide-react";
import { AuthContext } from "../routes/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logOut();
    navigate("/"); 
  };

  const activeClass = ({ isActive }) =>
    isActive ? "text-yellow-400 font-bold underline" : "hover:text-yellow-400";

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className={activeClass}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/allGames" className={activeClass}>Games</NavLink>
      </li>
      <li>
        <NavLink to="/about" className={activeClass}>About</NavLink>
      </li>
    </>
  );

  return (
    <nav className="navbar bg-linear-to-r from-slate-900 via-indigo-900 to-purple-900 text-white shadow-lg px-10 py-3">
      <div className="navbar-start">
        <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold tracking-widest text-yellow-400">
          <Gamepad2 size={35} />
          <span>GameHub</span>
        </Link>
      </div>

  
      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost text-yellow-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-base-200 text-base-content rounded-box w-52 font-bold z-10">
            {navLinks}

            {user?.email ? (
              <>
                <li>
                  <NavLink to="/profile">Profile</NavLink>
                </li>
                <li>
                  <button onClick={handleLogout} className="flex items-center gap-1">
                    <LogOut size={18} /> Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/auth/login">
                    <LogIn size={18} /> Login
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/auth/register">
                    <UserPlus size={18} /> Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      
      <div className="navbar-end hidden lg:flex items-center gap-5">
        <ul className="menu menu-horizontal px-1 font-bold">{navLinks}</ul>

        {user?.email ? (
          <>
            <button
              onClick={() => navigate("/profile")}
              className="btn btn-ghost rounded-full p-0 overflow-hidden"
            >
              <img
                src={user.photoURL || "https://via.placeholder.com/40"}
                alt={user.displayName || "Profile"}
                className="w-12 h-12 rounded-full"
              />
            </button>
            <button
              onClick={handleLogout}
              className="btn font-bold bg-red-500 hover:bg-red-600 text-white flex items-center gap-1"
            >
              <LogOut size={18} /> Logout
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/auth/login"
              className="btn  font-bold bg-yellow-400 hover:bg-amber-600 text-black hover:text-white flex items-center gap-1"
            >
              <LogIn size={18} /> Login
            </NavLink>
            <NavLink
              to="/auth/register"
              className="btn font-bold bg-yellow-400 hover:bg-amber-600 hover:text-white text-black flex items-center gap-1"
            >
              <UserPlus size={18} /> Register
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
