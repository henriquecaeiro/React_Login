//Importação de  pacotes e componentes
import React from 'react'
import Modal from '../pop_ups/Modal'
import { useContext } from 'react';
import { Context } from '../../context/userContext';
import './Home.css';
import Header from '../frame/Header';
import Footer from '../frame/Footer';
import hi from '../../assets/Hi.png'

function Home() {//Home do app

  const { visible } = useContext(Context) //importação da visibilidade do modal do contexto

  return (
    <div className='home-container'>
        <Header/>
        {visible && <Modal/>}{/*modal de aviso ficará visivel ao enviar formulário */}
        <div className="home-bg">
          <div className="home-box">
            <img src={hi} alt="hi" className='hi' />
            <h1 className='thanks'>Olá fulano obrigado por testar o sistema</h1>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home