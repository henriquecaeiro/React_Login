import React,{useContext} from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import info from '../../assets/Info.png'
import exit from '../../assets/Logout.png'
import {Link} from 'react-router-dom'
import {Context} from '../../context/userContext'

// Cabeçalho do app
function Header() {

  const { logout } = useContext(Context) 


  return (
    <div className='header'>
        <Link to='/' className='logo-header'><img src={logo} alt="logo"/></Link>
        <Link to='/info' className='info'><img src={info} alt="info" /></Link>
        <img src={exit} alt="logout"  className='logout' onClick={logout}/>
    </div>
  )
}

export default Header