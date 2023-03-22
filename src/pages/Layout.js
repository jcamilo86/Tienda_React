import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
   <nav>
    <div className='container-Layout'>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">Mujer</Link></li>
    <li><Link to="/dashboard">Hombre</Link></li>
    </div>
   </nav>
   <Outlet/>
   </>
  )
}
