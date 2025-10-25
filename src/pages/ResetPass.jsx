import React, { useState, useEffect } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { useLocation} from "react-router-dom";
import  auth  from "../Firebase/Firebase.config";
import Swal from "sweetalert2";

const ResetPass = () => {
  const location = useLocation();
//   const navigate = useNavigate();

  const [email, setEmail] = useState(location.state?.email || "");

  useEffect(() => {
    document.title = "Forgot Password | GameHub";
  }, []);

  const handleForgetPass = async (e) => {
    e.preventDefault();

    if (!email) {
      Swal.fire({
        icon: "warning",
        title: "Email Required!",
        text: "Please enter your email address first.",
        background: "#1f2937",
        color: "#fff",
        confirmButtonColor: "#facc15",
      });
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      Swal.fire({
        icon: "success",
        title: "Reset Email Sent!",
        text: "Please check your Gmail to reset your password.",
        background: "#1f2937",
        color: "#fff",
        confirmButtonColor: "#facc15",
      }).then(() => {
        window.open("https://mail.google.com", "_blank");
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Failed!",
        text: err.message,
        background: "#1f2937",
        color: "#fff",
        confirmButtonColor: "#f87171",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white py-10">
      <form
        onSubmit={handleForgetPass}
        className="bg-gray-800 p-8 rounded-3xl shadow-xl max-w-2xl w-full text-center"
      >
        <h2 className="text-5xl font-bold mb-5 text-yellow-400">
          Forgot Password ?
        </h2>

        <p className="text-gray-400 mb-14 text-lg">
          Enter your email address & we'll send you a reset link
        </p>

        <div className="mb-6">
          <label className="block mb-3 text-lg font-bold">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-amber-600 text-black font-bold py-3 rounded-lg shadow-md transition-all"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPass;
