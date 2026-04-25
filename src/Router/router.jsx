import React from 'react';
import { createBrowserRouter, } from "react-router";
import { RouterProvider } from "react-router/dom";
import root from '../Roots/root';
import Home from '@/Pages/Home';
import About from '@/Pages/About';
import Contact from '@/Pages/Contact';




export const router = createBrowserRouter([
  {
    path: "/",
    Component: root,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      
      

    ]
  },
]);