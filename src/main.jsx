import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { RouterProvider } from "react-router";
import { router } from './Routes/Routes.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Suspense fallback={<span>Loading...</span>}>
     <RouterProvider router={router} fallback={<div>Loading....</div>}  />
   </Suspense>
  </StrictMode>,
)
