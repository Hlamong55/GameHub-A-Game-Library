import React from 'react';
import Banner from '../components/Banner';
import { useLoaderData } from 'react-router';
import GameCard from '../components/GameCard';

const Home = () => {
    const gamesData = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className="grid w-11/12 mx-auto pb-4 mt-10 grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 overflow-hidden">
        {[...gamesData]
          ?.filter(game => game.ratings >= 4.6 && game.ratings <= 5)
          .slice(0, 6)
          ?.map((game) => (
            <GameCard key={game?.id} game={game}></GameCard>
          ))}
      </div>
        </div>
    );
};

export default Home;