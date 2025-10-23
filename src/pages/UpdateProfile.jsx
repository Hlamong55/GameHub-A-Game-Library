import React, { useContext, useState } from "react";
import { AuthContext } from "../routes/AuthProvider";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
import Swal from "sweetalert2";
import bgImg from "../assets/collected/loginnBanner.jpg"

const UpdateProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const currentUser = auth.currentUser;

      await updateProfile(currentUser, {
        displayName: name,
        photoURL: photoURL,
      });

      setUser({
        ...currentUser,
        displayName: name,
        photoURL: photoURL,
      });

      Swal.fire({
        title: "✅ Profile Updated!",
        text: "Your name and photo have been updated successfully.",
        icon: "success",
        confirmButtonColor: "#facc15",
        background: "#1f2937",
        color: "#fff",
      }).then(() => {
        navigate("/profile");
      });
    } catch (err) {
      Swal.fire({
        title: "❌ Update Failed",
        text: err.message,
        icon: "error",
        confirmButtonColor: "#f87171",
        background: "#1f2937",
        color: "#fff",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white py-10"
     style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-3xl shadow-xl max-w-md w-full"
      >
        <h2 className="text-4xl font-bold mb-10 text-center text-yellow-400">
          Update Your Profile
        </h2>

        <div className="mb-6">
          <label className="block mb-2.5 text-lg font-semibold">New Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2.5 text-lg font-semibold">New Photo URL</label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <button
          type="submit"
          className="w-full text-lg mt-5 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-lg shadow-md transition-all"
        >
          Update Changes
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
