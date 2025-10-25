import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../routes/AuthProvider';

const GameCard = ({game}) => {

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

  const handleDetailsClick = (id) => {
  if (!user) {
    navigate("/auth/login", { state: { from: `/gameDetails/${id}` } });
  } else {
    navigate(`/gameDetails/${id}`);
  }
};

    const {coverPhoto, title, category, ratings, id} = game;

    return (
           
         <div  onClick={() => handleDetailsClick(id)} className="transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] hover:border-red-500 border border-transparent rounded-lg overflow-hidden">

        <div className="h-56">
        <img src={coverPhoto} alt="" className="w-full h-full object-cover" /> </div>

        <div className='bg-linear-to-r from-slate-900 via-indigo-900 to-purple-900 p-5 space-y-2'>
            <h2 className="text-white text-xl font-bold drop-shadow-lg">
            {title}
          </h2>
          <p className="text-sm font-semibold text-gray-200 badge badge-dash">
             {category}
          </p>
        </div>

    
        <div className="bg-gray-800 px-5 py-3 text-white flex items-center justify-between">
        <button
          className="bg-green-600 px-3.5 py-1.5 rounded  font-bold"
        >
          Details
        </button>
        <div className="flex items-center justify-between">
          <span className="text-yellow-400 font-bold">★ {ratings}/5</span>
        </div>
        </div>
        </div>
        
    );
};

export default GameCard;

