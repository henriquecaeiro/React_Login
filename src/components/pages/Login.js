import React from 'react'
import logo from '../../assets/logo.png'
import './Login.css'

export default function Login() {

  function chageType(e){
    let hide = e.target.classList.contains('olho')
    let input = document.getElementById("input_senha");
    

    if(hide){
      e.target.className = "olho_fechado";
      input.type = "text"
    }else{
      e.target.className = "olho";
      input.type = "password"
    }
    
  }

  return (
    <div className='container'>
      <div className='bg'>
          <form className='form'>
            <img src={logo} alt="logo" className='logo' />
            <h1>Login</h1>
            <input type="text" placeholder='Email' className='Cp_em'/>
            <input type="password" placeholder='Senha' className='Cp_sn' id='input_senha'/>
            <span className='olho' onClick={chageType}></span>
            <input type="submit" value="Login"/>
            <a className='senha' href='#'>Esqueceu sua senha?</a>
            <a className='cadastro' href='#'>Não possui conta? Cadastre-se</a>
          </form>
      </div>
    </div>
  )
  
}
