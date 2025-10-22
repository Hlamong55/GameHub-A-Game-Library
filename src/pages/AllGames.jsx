import React from 'react';
import { useLoaderData } from 'react-router';
import AllGamesCard from '../components/AllGamesCard';

const AllGames = () => {
    const allData = useLoaderData();
    return (
        <div className='bg-gray-200'>
            
            <div className="grid w-11/12 mx-auto py-10 grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 overflow-hidden">
                {
                    allData.map(data => <AllGamesCard 
                    key={data.id}
                    data={data}
                    ></AllGamesCard>)
                }
            </div>
        </div>
    );
};

export default AllGames;