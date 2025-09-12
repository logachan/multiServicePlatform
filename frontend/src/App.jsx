import React from 'react'
import { RouterProvider } from 'react-router-dom'
import routerPath from './routes'
import { ToastContainer } from 'react-toastify'
import ChatBox from './components/ChatBox'

const App = () => {
  return (
    <>
      <div>
        <ChatBox />
        <ToastContainer />

        <RouterProvider router={routerPath} />
      </div>
    </>
  )
}

export default App
