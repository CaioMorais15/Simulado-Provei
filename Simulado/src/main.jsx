import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'
import Veiculos from './components/Veiculos/Veiculos.jsx';
import Login from "./components/Login/Login.jsx"
import Header from "./components/Header/header.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      
      { path: "/Veiculos", element: <Veiculos /> },
      { path: "/Header", element: <Header /> },
      { path: "/Login", element: <Login /> },
      

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
