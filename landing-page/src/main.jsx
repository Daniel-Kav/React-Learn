import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LandinngPageOne  from './pages/Home.jsx'
import Error from './pages/Error.jsx'
import { AboutPageOne } from './pages/About.jsx'
import { BlogPageTwo } from './pages/Blog.jsx'
import { ContactPageTwo } from './pages/Contacts.jsx'
import Darshboard from './pages/Darshboard.jsx'

const router =  createBrowserRouter([
  {
    path: '/',
    element: <LandinngPageOne />,
    errorElement: <Error />
  },
  {
    path: 'about',
    element: <AboutPageOne />,
    errorElement: <Error />
  },
  {
    path: 'blog',
    element: <BlogPageTwo />,
    errorElement: <Error />
  },
  {
    path: 'contact',
    element: <ContactPageTwo />,
    errorElement: <Error />
  },
  {
    path: 'darshboard',
    element: <Darshboard />,
    errorElement: <Error />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
