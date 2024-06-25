import React from "react";
import ReactDom from "react-dom/client";

import { createHashRouter, RouterProvider } from "react-router-dom";

import HomePage from "./views/HomePage";
import AboutPage from "./views/AboutPage";
import ServicesPage from "./views/ServicesPage";
import ContactPage from "./views/ContactPage";


const router = createHashRouter([
  {
    path:'/',
    element:(<HomePage />)
  },
  {
    path: '/about',
    element:(<AboutPage />)
  },
  {
    path:'/services',
    element:(<ServicesPage />)
  },
  {
    path:'/contact',
    element:(<ContactPage />)
  }
])


ReactDom.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)