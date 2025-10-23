import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import AllGames from "../pages/AllGames";
import GameDetails from "../pages/GameDetails";
import Login from "../pages/Login";
import About from "../pages/About";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import AuthLayout from "../layouts/AuthLayout";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../pages/MyProfile";
import UpdateProfile from "../pages/UpdateProfile";

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
        element: (
          <PrivateRoute>
            <GameDetails></GameDetails>
          </PrivateRoute>
        ),
        loader: async () => fetch("/games.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateProfile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
          {
            path: "login",
            element: <Login></Login>,
          },
          {
            path: "register",
            element: <Register></Register>,
          },
        ],
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
