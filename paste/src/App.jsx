import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import Navbar from './components/Navbar'
import Home from './components/Home'
import Paste from './components/Paste'
import Viewpaste from './components/Viewpaste'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="w-full h-full flex flex-col">
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/pastes",
    element: (
      <div className="w-full h-full flex flex-col">
        <Navbar />
        <Paste />
      </div>
    ),
  },
  {
    path: "/pastes/:id",
    element: (
      <div className="w-full h-full flex flex-col">
        <Navbar />
        <Viewpaste />
      </div>
    ),
  },
  {
    path: "*",
    element: <div className="w-full h-full flex flex-col">
      404 Not Found
    </div>,
  },
]);
function App() {

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
