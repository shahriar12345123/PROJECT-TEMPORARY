import React from 'react';
import { createBrowserRouter, } from "react-router";
import { RouterProvider } from "react-router/dom";
import root from '../Roots/root';
import Home from '@/Pages/Home';
import Login from '@/Pages/Login';
import SignUp from '@/Pages/SignUp';
import About from '@/Pages/About';

import Contact from '@/Pages/Contact';
import NewsLetter from '@/Pages/NewsLetter';
import MainFrameRealEstate from '@/Pages/realestate/MainFrameRealEstate';
import VacationMain from '@/Pages/vacation/VacationMain';
import Luxury from '@/Pages/Luxury';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: root,
    children: [
     { index: true,  element: <Home />},
     { path : "home" , element : <Home /> } ,
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },

      { path: "about" , element : <About /> },
      
      {
        path : "realestate",
        element : <MainFrameRealEstate></MainFrameRealEstate>
      },
      {
        path : "vacation",
        element : <VacationMain></VacationMain>
      },
     {

        path : "luxury",
        element : <Luxury></Luxury>
     },
      {
        path : "contact",
        element: <Contact></Contact>
      },
    
      {
        path : "newsletter",
        element : <NewsLetter></NewsLetter>
      },

    ]
  },
]);