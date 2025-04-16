import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Programs from './Pages/Programs/Programs.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Branches from './Pages/Branches/Branches.jsx';
import Login from './Components/Login.jsx';
import Signup from './Components/Signup.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/programs",
        element: <Programs></Programs>,
      },
      {
        path: "/branches",
        element: <Branches></Branches>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ]
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
