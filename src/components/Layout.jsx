import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <div className='d-flex'>
         <Sidebar/>
         <div className='flex-fill'>
            <Outlet/>
         </div>
      </div>
    </div>
  )
}

export default Layout
