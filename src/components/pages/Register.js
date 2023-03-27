//Importação de  pacotes e componentes
import React from 'react';
import logo from '../../assets/logo.png';
import { useState,useContext } from 'react';
import { Context } from '../../context/userContext';
import Modal from '../pop_ups/Modal';
import './Register.css';
import { Link } from 'react-router-dom';
import load from '../../assets/loading.gif';


function Register() { // Pág de registro

  const [user,setUser] = useState([])

  const [compare, setCompare] = useState('')

  const { visible,setVisible,setMessage,setStatus,register,setLoading,loading} = useContext(Context)//Desativar o carregamento ao aparecer o modal

  function changeTypePassword(e){ // função para mudar a visibilidade do input da senha
    let olho = e.target.id
    let input = document.getElementById('input_password')

    if(olho == 'closedEye-password' ){
        e.target.id = 'eye-password';
        input.type = 'text';
    }else{
        e.target.id = 'closedEye-password';
        input.type = 'password';
    }
  }

  function changeTypeConfirm(e){ // função para mudar a visibilidade do input da confirmação
    let olho = e.target.id
    let input = document.getElementById('input_confirm')

    if(olho == 'closedEye-confirm' ){
        e.target.id = 'eye-confirm';
        input.type = 'text';
    }else{
        e.target.id = 'closedEye-confirm';
        input.type = 'password';
    }
  }

  function changeValue(e){ {/*função para guadar os dados impressos no objeto */}
    if(e.target.name == "dateOfBirth"){// feito para converter a data para o padrão BR
      let day = e.target.value.split('-')[2]
      let month = e.target.value.split('-')[1]
      let year = e.target.value.split('-')[0]
      let convertedDate = `${day}-${month}-${year}`
      setUser({...user, [e.target.name]: convertedDate})
    }else{
      setUser({...user, [e.target.name]: e.target.value})
    }
  }

  function submit(e){ //Enviar dados para api
    e.preventDefault()
    setLoading(true)
    if(user.password != compare){// se um campo estiver branco ou os campos não forem iguais, emite aviso
      setStatus('FAILED')
      setMessage('As senhas não conhecidem ou estão em branco')
      setVisible(true)
    }else{
      register(user)
    }
    

  }



  return (
    <div className='container'>
      {visible && <Modal/>}{/*modal de aviso ficará visivel ao enviar formulário */}
      <div className='bg'>
          <form className='form' onSubmit={submit}>
            <img src={logo} alt="logo" className='logo-register'/>
            <h1 className='register-title'>Registre-se</h1>
            <input type="text" placeholder='Nome' className='w50' name='name' id='input_name' onChange={changeValue}/>
            <input type="text" placeholder='Email' className='w50' name='email' id='input_email'  onChange={changeValue}/>
            <input type="date" placeholder='Data de nascimento' className='w100' id='input_date' name='dateOfBirth' onChange={changeValue} />
            <input type="password" placeholder='Senha' className='w50' id='input_password' name='password'  onChange={changeValue} />
            <span id='closedEye-password' onClick={changeTypePassword}></span>
            <input type="password" placeholder='Confirme sua senha' className='w50' id='input_confirm' name='confirm-password' onChange={(e) => {setCompare(e.target.value)}}/>
            <span id='closedEye-confirm'onClick={changeTypeConfirm}></span>
            {loading && 
            <>
            <input type="submit" value="" className='register-button'/>
            <img src={load} alt="loading" className='load'/>
            </>
            }{/*Tela de carregamento*/}
            {!loading && 
            <>
            <input type="submit" value="Registrar" className='register-button'/>
            </>
            }
            <Link to='/login' className='entrar'>Já possui conta? Entre</Link>
          </form>
      </div>
    </div>
  )
}

export default Register