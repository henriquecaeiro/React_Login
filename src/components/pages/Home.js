//Importação de  pacotes e componentes
import React from 'react'
import Modal from '../pop_ups/Modal'
import { useContext,useEffect,useState } from 'react';
import { Context } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Header from '../frame/Header';
import Footer from '../frame/Footer';
import hi from '../../assets/Hi.png';
import api from '../../utils/api';

function Home() {//Home do app

  const { visible,authenticated,setAuthenticated } = useContext(Context) //importação da visibilidade do modal do contexto
  const [name, setName] = useState(" ");

  const history = useNavigate()

 
  useEffect(()=>{
     const token = localStorage.getItem('token');

     if(!token){
        history("/login");
     }else{
      api.get("/user/checkUser",{
        headers:{
          Authorization: `Bearer ${JSON.parse(token)}`
        }
      }).then((response)=>{
        setName(response.data.name.split(" ")[0].toLowerCase())
      })
     }
  
  },[authenticated])

  return (
    <div className='home-container'>
        <Header/>
        {visible && <Modal/>}{/*modal de aviso ficará visivel ao enviar formulário */}
        <div className="home-bg">
          <div className="home-box">
            <img src={hi} alt="hi" className='hi' />
            <h1 className='thanks'>Olá {name} obrigado por testar o sistema</h1>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home