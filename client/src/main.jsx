import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import Signin from './components/pages/auth/SignIn.jsx'
import Signup from './components/pages/auth/SignUp.jsx'
import { RouterProvider } from 'react-router'
import { ClerkProvider } from '@clerk/clerk-react'
import Dashboard from './components/pages/dashboard/Dashboard.jsx'
import Signout from './components/pages/auth/SignOut.jsx'
import Home from './components/pages/home/Home.jsx'
// import { SignIn } from "@clerk/clerk-react"

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const router = createBrowserRouter([
  {
    element: <App />,
    path:"/",
  },
  {
    element: <Signin />,
    path:"/sign-in"

  },
  {
    element: <Signup />,
    path:"/sign-up"

  },
  {
    element: <Signout />,
    path:"/sign-out"
  },
  {
    element: <Home />,
    path:"/home"
  },
  {
    element: <Dashboard />,
    path:"/editor/:roomId"
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}><RouterProvider router={router} /></ClerkProvider>
  </React.StrictMode>,
)
