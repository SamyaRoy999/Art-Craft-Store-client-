import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layout/Roots";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddCraft from "../Pages/AddCraft/AddCraft";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/addCraft',
          element: <AddCraft/>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/register',
          element: <Register/>
        },
      ]
    },
  ]);