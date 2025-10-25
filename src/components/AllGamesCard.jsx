import React from 'react';
import { Link } from 'react-router';

const AllGamesCard = ({data}) => {
    const {coverPhoto, title, category, ratings, id} = data;
    return (
         <Link to={`/gameDetails/${id}`}
                >
          <div className="transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] hover:border-red-500 border border-transparent rounded-lg overflow-hidden">
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
                  className="bg-green-600 px-3.5 py-1.5 rounded t font-bold">
                  Details
                </button >
                <div className="flex items-center justify-between">
                  <span className="text-yellow-400 font-bold">★ {ratings}/5</span>
                </div>
              </div>
          </div>
         </Link>
    );
};

export default AllGamesCard;