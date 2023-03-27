import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import info from '../../assets/Info.png'
import logout from '../../assets/Logout.png'
import {Link} from 'react-router-dom'

// Cabeçalho do app
function Header() {
  return (
    <div className='header'>
        <Link to='/' className='logo-header'><img src={logo} alt="logo"/></Link>
        <Link to='/info' className='info'><img src={info} alt="info" /></Link>
        <Link to='/login' className='logout'><img src={logout} alt="logout" /></Link>
    </div>
  )
}

export default Header