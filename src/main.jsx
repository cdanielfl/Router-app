import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import Layout from './components/Layout.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Cadastro from './pages/Cadastro.jsx'
import { NotFound } from './pages/NotFound.jsx'
import { Home } from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },

// Abaixo usando outlet

  {
    path: "/",
    element: <Layout/>,
    children: [
     
  {
    path: "/cadastro",
    element: <Cadastro />
  },
  {
    path: "/home",
    element: <Home />
  },

    ]
  },

// Fim do outlet





  {
    path: "*",
    element: <NotFound />
  }
])

createRoot(document.getElementById('root')).render( 
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
