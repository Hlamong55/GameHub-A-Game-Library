import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router";

const GameDetails = () => {

  const { id } = useParams();
  const details = useLoaderData();
  const singleGame = details.find((game) => String(game.id) === id);


    useEffect(() => {
    if (singleGame?.title) {
      document.title = `${singleGame.title} | GameHub`;
    } else {
      document.title = "Game Details | GameHub";
    }
  }, [singleGame]);



  if (!singleGame) {
    return <p className="text-center text-lg font-semibold">Loading game details...</p>;
  }

  const {
    coverPhoto,
    title,
    category,
    downloadLink,
    description,
    ratings,
    developer,
  } = singleGame;

  return (
    <div className="bg-gray-200 text-white py-20 px-6 sm:px-10 font-sans"
    style={{backgroundImage: `url(https://i.ibb.co.com/7NdTGGZV/07321214-aad8-4167-b316-bf8f96c8cf38.jpg)`}}>
      <div className="max-w-6xl mx-auto shadow-2xl rounded-lg overflow-hidden border border-gray-800 bg-[#141414]">
        <div className="md:flex">
          <div
            className="md:w-1/2 bg-cover bg-center"
            style={{
              backgroundImage: `url(${coverPhoto})`,
              minHeight: "450px",
            }}
          ></div>

          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-8xl sm:text-4xl font-bold text-yellow-400 mb-3 tracking-wide">
                {title}
              </h1>

              <p className="text-gray-300 text-lg mb-8">{description}</p>

              <div className="space-y-2.5 text-lg">
                <p>
                  <span className="text-gray-400">Genre:</span>{" "}
                  <span className="text-pink-400 font-semibold">
                    {category}
                  </span>
                </p>

                <p>
                  <span className="text-gray-400">Rating:</span>{" "}
                  <span className="text-green-400 font-bold">{ratings} ★</span>
                </p>
                <p>
                  <span className="text-gray-400">Developed By:</span>{" "}
                  <span className="text-pink-400 font-medium">
                    {developer}
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-6 flex  flex-wrap gap-2">
              <span className="bg-red-600 px-3 py-1 rounded-full">
                #{category}
              </span>
            </div>

            <button
              onClick={() => {
                if (downloadLink) {
                  window.location.href = downloadLink;
                } else {
                  alert("Download link not available!");
                }
              }}
              className="relative mt-2 inline-block px-6 py-2 font-bold tracking-wide text-yellow-400 border border-yellow-400 rounded-md group overflow-hidden transition duration-300 ease-in-out"
            >
              <span className="absolute inset-0 w-full h-full transform scale-0 bg-yellow-400 opacity-20 group-hover:scale-100 transition-transform duration-300 ease-in-out"></span>

              <span className="absolute inset-0 border border-yellow-400 group-hover:border-transparent rounded-md transition-all duration-300 ease-in-out"></span>

              <span className="relative z-10 group-hover:text-white">
                Download App
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
