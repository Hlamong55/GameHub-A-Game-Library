import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import AllGames from "../pages/AllGames";
import GameDetails from "../pages/GameDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/games.json"),
      },
      {
        path: "/allGames",
        element: <AllGames></AllGames>,
        loader: () => fetch("/games.json"),
      },
      {
        path: "/gameDetails/:id",
        element: <GameDetails />,
        loader: async () => fetch("/games.json"),
      },
    ],
  },
  {
    path: "/auth",
    element: <h2>Authentication Layout</h2>,
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);

export default router;
