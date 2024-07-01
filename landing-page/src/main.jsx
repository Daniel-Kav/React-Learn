import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LandinngPageOne  from './pages/Home.jsx'
import Error from './pages/Error.jsx'

const router =  createBrowserRouter([
  {
    path: '/',
    element: <LandinngPageOne />,
    errorElement: <Error />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
