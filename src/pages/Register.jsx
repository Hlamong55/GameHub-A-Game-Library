import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bgImage from "../assets/collected/img1.jpeg";
import Swal from "sweetalert2";
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from "../Firebase/Firebase.config";

const Register = () => {
   useEffect(() => {
        document.title = "Register | GameHub";
      }, []);


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");


  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { name, email, password } = formData;


    const passRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passRegex.test(password)) {
      setError("Password must contain uppercase, lowercase and be at least 6 characters long.");
      return;
    }

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(res.user, { displayName: name });

      Swal.fire({
        title: "🔥 Successful SignUp",
        text: `Welcome, ${name}!`,
        icon: "success",
        background: "#1e1e2f",
        color: "#fff",
        confirmButtonColor: "#ff4c29",
        confirmButtonText: "Start Exploring 🎮",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });
    } catch (err) {
      setError(err.message);
      Swal.fire({
        title: "💥 SignUp Failed!",
        text: err.code,
        icon: "error",
        background: "#2f1e1e",
        color: "#fff",
        confirmButtonColor: "#ff4c29",
        confirmButtonText: "Retry 🔁",
      });
    }
  };

  
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
        if (result.isConfirmed) navigate("/");
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
      className="flex items-center justify-center px-4 py-12 min-h-screen"
    >
      <div className="bg-white/80 dark:bg-black/60 backdrop-blur-md p-10 rounded-3xl max-w-md w-full shadow-2xl">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-4">
          Create Your Account
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-6 text-lg">
          Join the <span className="font-bold text-purple-800">GameHub</span> community and start exploring indie games!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block font-medium text-gray-800 dark:text-gray-200 mb-1">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

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

          {/* Photo */}
          <div>
            <label className="block font-medium text-gray-800 dark:text-gray-200 mb-1">
              Photo URL
            </label>
            <input
              name="photoURL"
              type="text"
              value={formData.photoURL}
              onChange={handleChange}
              placeholder="Enter your Photo URL"
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

          {error && <p className="text-red-500 text-sm">{error}</p>}

          
          <button
            type="submit"
            className="w-full mt-5 bg-linear-to-r from-slate-900 via-indigo-900 to-purple-900 text-white font-bold shadow-lg hover:from-purple-900 hover:via-indigo-700 hover:to-slate-800 transition-all duration-300 px-6 py-3 rounded-lg"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 w-full bg-red-500 hover:bg-red-700 text-white border border-gray-300 font-medium py-3 rounded-lg shadow-sm transition-all duration-300"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span>Sign up with Google</span>
          </button>
        </div>

        
        <p className="mt-6 text-center text-gray-700 dark:text-gray-300">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-red-600 hover:text-red-700 font-semibold underline">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
