import React from 'react';
import Header from '../frame/Header';
import './Error404.css';
import notFound from '../../assets/NotFound.png'

//Página do erro 404
export default function Error404() {
  return (
    <div className='error-container'>
      <Header/>
      <div className="bg-error">
        <div className='error-box'>
          <img src={notFound} className='notFound' alt='not-found'/>
          <h1 className='title-error'>Erro 404</h1>
          <p className='phrase-error'>A não achamos o que você estava procurando.</p>
        </div>
      </div>
    </div>
  )
}
