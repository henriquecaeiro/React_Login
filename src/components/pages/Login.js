//Importação de  pacotes e componentes
import React from 'react';
import logo from '../../assets/logo.png';
import './Login.css';
import { useState,useContext } from 'react';
import { Context } from '../../context/userContext';
import { Link } from 'react-router-dom';
import Modal from '../pop_ups/Modal';
import load from '../../assets/loading.gif'



export default function Login() {//Pág de Login

  const [user,setUser] = useState({})//Objeto que guarda as informações do user
  const { login,visible,loading,setLoading } = useContext(Context) // Variáveis e funções vindas do contexto


  
  

  function changeType(e){ // função para mudar a visibilidade do campo
    let olho = e.target.classList
    let input = document.getElementById('input_senha')

    if(olho == 'olho_fechado' ){
        e.target.classList = 'olho';
        input.type = 'text';
    }else{
        e.target.classList = 'olho_fechado';
        input.type = 'password';
    }
  }

  function changeValue(e){// função para guardar os valores impressos no input e mandar para API
    setUser({...user, [e.target.name]: e.target.value})
  }



  function submit(e){//Enviar dados para api 
    e.preventDefault() 
    setLoading(true)
    login(user)
  }



  return (
    <div className='container'>
      {visible && <Modal/>}
      <div className='bg'>
          <form className='form'  onSubmit={submit}>
            <img src={logo} alt="logo" className='logo' />
            <h1 className='login-title'>Login</h1>
            <input type="text" placeholder='Email' className='Cp_em' name='email' onChange={changeValue}/>
            <input type="password" placeholder='Senha' className='Cp_sn' id='input_senha' name='password'  onChange={changeValue}/>
            <span className='olho_fechado' onClick={changeType}></span>
            {loading ?<><input type="submit" value=""/><img src={load} alt="loading" className='load'/></>:<input type="submit" value="Login"/>}
            <Link to="/request-reset" className='senha'>Esqueceu sua senha?</Link>
            <Link to="/register" className='cadastro'>Não possui conta? Cadastre-se</Link>
          </form>
      </div>
    </div>
  )
  
}
