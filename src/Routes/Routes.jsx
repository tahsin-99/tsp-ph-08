import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import Errorpage from '../Pages/Errorpage/Errorpage';
import Home from '../Pages/Home/Home';
import Apps from '../Pages/Apps/Apps';
import Installed from '../Pages/Installed/Installed';
import TrendingApps from '../Components/TendingApps/TrendingApps';
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
            loader:()=>fetch('')
        },
        {
            path:'/apps',
            Component:Apps
        },
         {
            path:'/installation',
            Component:Installed
        },
         
    ]

  },
]);
 