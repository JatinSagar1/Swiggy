import React from 'react'
import Navbar from './Navbar'
import Body from './Body'
import Parent from './Parent'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import RestMenu from './RestMenu'

const AppLayout = () => {
    
  return (
        <>
    <Parent>

      <Navbar/>

      <Outlet/>
    </Parent>
    </>
  )
}

const AppRouter = createBrowserRouter([
    {
        path: "/Swiggy",
        element: <AppLayout/>,
        children:[
            {
                index: true,
                element: <Body/>
            },
            {
                path: "rest/:id",
                element: <RestMenu/>
            }
        ]

    }
])

export default AppRouter