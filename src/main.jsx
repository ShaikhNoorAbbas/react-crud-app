import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './views/layout/Layout.jsx';
import Home from "./views/home/Home.jsx";
import Update from "./views/update/Update.jsx";
import Add from './views/add/Add.jsx';
const route = createBrowserRouter([
  {
    path: '/',
    element: < Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/add',
        element: <Add />
      },
      {
        path: '/edit/:id',
        element: <Update />
      },
      {
        path: '*',
        element: <h1>Page Not Found</h1>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
