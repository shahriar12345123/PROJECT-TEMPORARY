import React from 'react';
import { createBrowserRouter ,  } from "react-router";
import root from '../Pages/Roots/root';
import Home from '../Pages/Home';
import indus from '../Pages/indus';
import Features from '../Pages/features';
import Pricing from '../Pages/Pricing';
import NewsLetter from '../Pages/NewsLetter';
import Integrations from '../Pages/Integrations';
import About from '../Pages/About';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: root ,
    children:[
        {
            index:true,
            path: "/",
            Component:Home ,
        },
        {
            path:"/indus",
            Component:indus,
        },

        {
          path:"/features",
          Component: Features ,
        },

        {
          path:"/pricing",
          Component : Pricing ,
        },

        {
         path: "/newsLetter",
         Component: NewsLetter
        },
        
        {
          path:"/integrations",
          Component: Integrations,
        },
      {
        path : "/about",
        Component: About
      },

    ]
  },
]);