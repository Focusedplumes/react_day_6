
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from 'react'
import Layout from './components/Layout';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Wiki from './pages/Wiki';
import Pokemon from './pages/Pokemon';
// import ErrorPage from './pages/ErrorPage';


const router = createBrowserRouter([
  
  {
    path: "/home",
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "pokemon/:pokemonID", element: <Pokemon /> },
      { path: "wiki", element: <Wiki /> },
    ]
  }, //separate objects by commas
  {
    path: "/",
    element: <SignIn />
  }
]);

export default function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}



