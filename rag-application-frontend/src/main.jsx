import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  redirect
} from "react-router-dom";
import { Login } from './Pages/Login';
import { Dashboard as ConsumerDashboard } from './Pages/Consumer/Dashboard';
import { Dashboard as CreatorDashboard } from './Pages/Creator/Dashboard';
import { Signup } from './Pages/Signup';
import { ForgetPassword } from './Pages/ForgetPassword';

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => redirect("/login")
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />
  },
  {
    path: "/creator/dashboard",
    element: <CreatorDashboard />
  },
  {
    path: "/consumer/dashboard",
    element: <ConsumerDashboard />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);