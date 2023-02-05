import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {About} from "./components/About"
 import {ProtectedRoute} from "./components/auth"
import {Login} from "./components/Login"
import {Home} from "./components/Home"
import { Pagenotfound } from "./components/pagenotfound";
import {Notifications} from "./components/notification";

import { Dashboard } from './components/Dashboard/dashboard'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "about",
    element: <About/>,
  },


  {
    path: "login",
    element: <Login/>,
  },

  {
    path: "notifications",
    element: <Notifications/>,
  },

  {
    path:"dashboard",
    element:<ProtectedRoute>
      <Dashboard />
      
    </ProtectedRoute>
  },
  {
    path:"*",
    element:<Pagenotfound/>
  },
 
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
