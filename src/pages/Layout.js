import React from 'react'
import { Link, Outlet } from 'react-router-dom'




export default function Layout() {
  return (
    <>
   <nav>
    <div className='container-Layout'>
    <ul className='main-menu'>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">Mujer</Link></li>
    <li><Link to="/dashboard">Hombre</Link></li>
    <li><Link to="/Form" >Iniciar sesión</Link></li>
    <li><Link to="/register" className='btns'>Crear Cuenta</Link></li>
    </ul>
    </div>
   </nav>
   <Outlet/>
  
   </>
  )
}
