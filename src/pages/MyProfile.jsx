import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../routes/AuthProvider";

const MyProfile = () => {
    useEffect(() => {
          document.title = "My-Profile | GameHub";
        }, []);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 py-10">
      <div className="bg-gray-800 p-8 rounded-3xl shadow-xl max-w-md w-full text-center">
        <img
          src={user?.photoURL || "https://via.placeholder.com/120"}
          alt={user?.displayName || "Profile"}
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{user?.displayName || "No Name"}</h2>
        <p className="text-gray-300 mb-4">{user?.email}</p>

        <button
          onClick={() => navigate("/profile/update")}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-lg transition-all"
        >
          Update Info
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
