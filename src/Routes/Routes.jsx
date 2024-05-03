import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layout/Roots";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddCraft from "../Pages/AddCraft/AddCraft";
import App from "../App";
import MyArtCraft from "../Pages/MyArtCraft/MyArtCraft";
import Error from "../Pages/Error/Error";
import ArtsSingle from "../Pages/ArtsSingle/ArtsSingle";
import AllArtsCraft from "../Pages/AllArtsCraft/AllArtsCraft";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots/>,
      errorElement: <Error/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/register',
          element: <Register/>
        },
        {
          path: '/app',
          element: <App/>
        },
        {
          path: '/addCraft',
          element: <AddCraft/>
        },
        {
          path: '/myArtCraft',
          element: <MyArtCraft/>
        },
        {
          path: '/artsSingle/:id',
          element: <ArtsSingle/>
        },
        {
          path: 'AllArtsCraft',
          element: <AllArtsCraft/>
        },
      ]
    },
  ]);