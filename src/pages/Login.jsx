import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import auth from "../Firebase/Firebase.config";
import bgImage from "../assets/collected/car9.jpeg";

const Login = () => {
  useEffect(() => {
    document.title = "Login | GameHub";
  }, []);

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const googleProvider = new GoogleAuthProvider();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      Swal.fire({
        title: "🎮 Welcome Back!",
        text: `Logged in as ${res.user.displayName || res.user.email}`,
        icon: "success",
        background: "#1e1e2f",
        color: "#fff",
        confirmButtonColor: "#ff4c29",
        confirmButtonText: "Start Gaming 🚀",
      }).then((result) => {
        if (result.isConfirmed) {
         const from = location.state?.from || "/";
        navigate(from, { replace: true });
        }
      });
    } catch (err) {
      setError(err.message);
      Swal.fire({
        title: "💥 Login Failed!",
        text: err.code,
        icon: "error",
        background: "#2f1e1e",
        color: "#fff",
        confirmButtonColor: "#ff4c29",
      });
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      Swal.fire({
        title: "🔥 Logged In!",
        text: `Welcome, ${res.user.displayName || "Gamer"}!`,
        icon: "success",
        background: "#1e1e2f",
        color: "#fff",
        confirmButtonColor: "#ff4c29",
        confirmButtonText: "Start Exploring 🎮",
      }).then((result) => {
        if (result.isConfirmed) {
          const from = location.state?.from || "/";
          navigate(from, { replace: true });
        }
      });
    } catch (err) {
      Swal.fire({
        title: "💥 Google Login Failed!",
        text: err.message,
        icon: "error",
        background: "#2f1e1e",
        color: "#fff",
        confirmButtonColor: "#ff4c29",
      });
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex items-center justify-center min-h-screen px-4 py-12"
    >
      <div className="bg-white/80 dark:bg-black/60 backdrop-blur-md p-10 rounded-3xl max-w-md w-full shadow-2xl">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-4">
          Welcome Back!
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-8 text-lg">
          Login to your{" "}
          <span className="font-bold text-purple-800">GameHub</span> account to
          exploring.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block font-medium text-gray-800 dark:text-gray-200 mb-1">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block font-medium text-gray-800 dark:text-gray-200 mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <button
            onClick={() => navigate("/auth/resetPass", { state: { email: formData.email } } )}
            className="font-bold text-gray-800 dark:text-gray-200 hover:text-purple-700 hover:underline cursor-pointer transition-all duration-300"
          >
            Forgot Password?
          </button>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full mt-3 bg-linear-to-r from-slate-900 via-indigo-900 to-purple-900 text-white font-bold shadow-lg 
               hover:from-purple-900 hover:via-indigo-700 hover:to-slate-800 
               transition-all duration-300 px-6 py-3 rounded-lg"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 w-full bg-red-500 hover:bg-red-700  text-white border border-gray-300  font-medium py-3 rounded-lg shadow-sm transition-all duration-300"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span>Login with Google</span>
          </button>
        </div>

        <p className="mt-6 text-center text-gray-700 dark:text-gray-300">
          Don't have an account?{" "}
          <Link
            to="/auth/register"
            className="text-red-600 hover:text-red-700 font-semibold underline"
          >
            Create Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
