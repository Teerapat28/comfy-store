import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from "./pages";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        index: 'products',
        element: <Products />,
      },
      {
        index: 'products/:id',
        element: <SingleProduct />,
      },
      {
        index: 'cart',
        element: <Cart />,
      },
      {
        index: 'about',
        element: <About />,
      },
      {
        index: 'checkout',
        element: <Checkout />,
      },
      {
        index: 'orders',
        element: <Orders />,
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
