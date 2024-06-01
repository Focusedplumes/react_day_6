
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from 'react'

const router = createBrowserRouter([
  // {
  //   path: "/home",
  //   element: <Layout />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     { path: "", element: <Home /> },
  //     { path: "pokemon/:pokemonID", element: <Pokemon /> },
  //     { path: "wiki", element: <Wiki /> },
  //   ]
  // },
  {
    path: "/",
    element: <SignIn />
  }
]);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

function App() {
  return (
    <>
      <RouterProvider route={router} />
    </>
  )
}

