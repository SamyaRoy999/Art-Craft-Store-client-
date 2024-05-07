import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layout/Roots";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddCraft from "../Pages/AddCraft/AddCraft";
import MyArtCraft from "../Pages/MyArtCraft/MyArtCraft";
import Error from "../Pages/Error/Error";
import ArtsSingle from "../Pages/ArtsSingle/ArtsSingle";
import AllArtsCraft from "../Pages/AllArtsCraft/AllArtsCraft";
import UpdateArts from "../Pages/UpdateArts/UpdateArts";
import PrivetedRoute from "../Priveted/PrivetedRoute";
import AllSubCatagory from "../Pages/AllSubCatagory/AllSubCatagory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/addCraft',
        element: <PrivetedRoute><AddCraft /></PrivetedRoute> 
      },
      {
        path: '/myArtCraft',
        element:<PrivetedRoute> <MyArtCraft /></PrivetedRoute>
      },
      {
        path: '/artsSingle/:id',
        element:<PrivetedRoute><ArtsSingle /></PrivetedRoute> 
      },
      {
        path: '/AllArtsCraft',
        element: <AllArtsCraft />
      },
      {
        path: '/subcategory/:subcategoryName',
        element: <AllSubCatagory />
      },
      {
        path: '/updateArts/:id',
        element: <UpdateArts />,
        loader: ({ params }) => fetch(`https://server-side-art.vercel.app/addArts/singel/${params.id}`)
      },
    ]
  },
]);