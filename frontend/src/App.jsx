import React from 'react'
import { RouterProvider } from 'react-router-dom'
import routerPath from './routes'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <>
      <div>
        <ToastContainer/>
        <RouterProvider router={routerPath}/>
      </div>
    </>
  )
}

export default App
