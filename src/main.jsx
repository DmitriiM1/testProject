import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import { Page } from './pages/components/Page.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/home",
    element: <Page>home page</Page>,
  },
  {
    path: "/aboutme",
 element: <Page>aboutpage</Page>,
  },
  {
    path: "/project",
 element: <Page>project</Page>,
  },
  {
    path: "/legacy",
    element: <App></App>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
