import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import Errorpage from '../Pages/Errorpage/Errorpage';
import Home from '../Pages/Home/Home';
import Apps from '../Pages/Apps/Apps';
import Installed from '../Pages/Installed/Installed';
import AppDetails from '../Pages/AppDetails/AppDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<Errorpage></Errorpage>,

    children:[
        {
            index:true,
            path:'/',
            Component:Home,
            loader:()=>fetch('/homeapp.json')
        },
        {
            path:'/apps',
            Component:Apps,
            loader:()=>fetch('/apps.json')
        },
         {
            path:'/installation',
            Component:Installed,
            loader:()=>fetch('/apps.json')
        },
        {
            path:'/appsdetails/:id',
            Component:AppDetails,
            loader:()=>fetch('/apps.json')
        },
         
    ]

  },
]);
 