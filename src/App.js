import React from "react";
import "./App.css";
import CityManagement from "./pages/city-management/components";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CityManagement />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
