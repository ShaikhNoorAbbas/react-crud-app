import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './views/layout/Layout';
import Home from "./views/home/Home";
import Add from './views/add/Add';
import Edit from "./views/edit/Edit";
// Route
const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/add",
        element: <Add />
      },
      {
        path: "/edit/:id",
        element: <Edit />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
)
