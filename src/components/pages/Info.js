//Importação de  pacotes e componentes
import React from 'react'
import Header from '../frame/Header';
import Footer from '../frame/Footer';
import './Info.css';
import info from'../../assets/InfoB.png'
import { Link } from 'react-router-dom';


function Info() {//Pág de informações do projeto
  return (
    <>
        <Header/>
        <div className='info-bg'>
            <div className="info-box">
                <img src={info} alt="info" className='info-icon' />
                <p className='info-text'>Projeto construído em ReacJs para demonstrar o funcionamento da API de login criada por mim. Para mais informações acesse meu github:</p>
                <button  className='link'><Link to='https://github.com/henriquecaeiro?tab=repositories'>Acessar</Link></button>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Info