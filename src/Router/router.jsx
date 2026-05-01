import React from 'react';
import { createBrowserRouter, } from "react-router";
import { RouterProvider } from "react-router/dom";
import root from '../Roots/root';
import Home from '@/Pages/Home';
import Login from '@/Pages/Login';
import SignUp from '@/Pages/SignUp';
import About from '@/Pages/About';
import Buy from '@/Pages/realestate/Buy';
import Contact from '@/Pages/Contact';
import NewsLetter from '@/Pages/NewsLetter';
import Luxury from '@/Pages/Luxury';
import Sell from '@/Pages/realestate/Sell';
import Booking from '@/Pages/vacation/Booking';
import Destination from '@/Pages/vacation/Destination';
import LuxuryDetails from '@/Pages/LuxuryDetails';



export const router = createBrowserRouter([
  {
    path: "/",
    Component: root,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },

      { path: "about", element: <About /> },

      {
        path: "realestate/buy",
        element: <Buy></Buy>
      },
      {
        path: "realestate/sell",
        element: <Sell></Sell>
      },
      {
        path: "vacation/booking",
        element: <Booking></Booking>
      },

      {
        path: "vacation/destination",
        element: <Destination />
      },

      {

        path: "luxury",
        element: <Luxury></Luxury>
      },
      {
        path: "details/:id",
        element: <LuxuryDetails></LuxuryDetails>
      },
      {
        path: "contact",
        element: <Contact></Contact>
      },

      {
        path: "newsletter",
        element: <NewsLetter></NewsLetter>
      },

    ]
  },
]);