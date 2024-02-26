import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route ,RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import App from './App.jsx'
import Router from './Router.jsx'


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App />}>
//       <Route path='' element={<Home />} />
//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <App />
  </React.StrictMode>,
)
