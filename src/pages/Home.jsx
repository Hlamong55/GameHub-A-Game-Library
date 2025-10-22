import React from 'react';
import Banner from '../components/Banner';
import { useLoaderData, useNavigate } from 'react-router';
import GameCard from '../components/GameCard';
import { Gamepad2 } from 'lucide-react';
import Newsletter from '../components/NewsLetter';

const Home = () => {
  const gamesData = useLoaderData();
  const navigate = useNavigate();

  const handleSeeAll = () => {
    navigate('/allGames'); 
  };

  return (
    <div className="bg-gray-300">
      <Banner />
      <h1 className="flex justify-center items-center text-6xl font-bold bg-linear-to-r from-slate-900 via-indigo-900 to-purple-500 bg-clip-text text-transparent gap-3 mt-14">
  Popular Games
  <Gamepad2 size={80} className="text-purple-600" />
</h1>

      <div className="grid w-11/12 mx-auto p-4 mt-8 grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 overflow-hidden">
        {[...gamesData]
          ?.filter((game) => game.ratings >= 4.6 && game.ratings <= 5)
          .slice(0, 6)
          ?.map((game) => (
            <GameCard key={game?.id} game={game} />
          ))}
      </div>

      <div className="flex justify-center py-14">
        <button
          onClick={handleSeeAll}
          className="btn text-lg bg-linear-to-r from-yellow-700 via-amber-400 to-yellow-300 text-black font-bold hover:from-amber-500 hover:via-yellow-400 hover:to-amber-500 hover:text-gray-700 transition-all duration-300 px-10 py-7 rounded-lg shadow-md mt-5"
        >
          See All Games 🎮
        </button>
      </div>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
