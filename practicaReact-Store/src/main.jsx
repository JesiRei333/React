//import React from 'react'
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Login2 from "./pages/Login2";
import LoginRHF from "./pages/LoginRHF";

// <React.StrictMode>
//<App />
// </React.StrictMode>,

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/login2",
    element: <Login2 />,
  },
  {
    path: "/loginRHF",
    element: <LoginRHF />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
