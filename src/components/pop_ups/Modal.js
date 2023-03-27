//Importação de  pacotes e componentes
import React, {useState,useContext} from "react";
import './Modal.css'
import error from '../../assets/Cancel.png';
import success from '../../assets/Ok.png';
import wait from '../../assets/wait.png';
import { Context } from '../../context/userContext';

export default function Modal() {//modal de avisos do app

    const { status,message,setVisible,setLoading } = useContext(Context) 
    //funções e variáveis vindas do contexto

    setLoading(false)//Desativar o carregamento ao aparecer o modal

    return(
        <div className="modal-bg">
            <div className="modal-container">
                {/*Css do modal muda de acordo com a resposta da api*/}
                {status == 'FAILED' && 
                    <>
                        <img src={error} alt="logo" className="icon"/>
                        <h1 className="title">Ops!</h1> 
                        <p className="warning">{message}</p>
                        <button className="button-err"  onClick={()=> setVisible(false)}>Tentar novamente</button>
                    </>
                }
                {status == 'SUCCESS' && 
                    <>
                        <img src={success} alt="logo" className="icon"/>
                        <h1 className="title">Bem vindo!</h1>
                        <p className="warning">{message}</p>
                        <button className="button-suc" onClick={()=> setVisible(false)}>Entrar</button>
                    </>
                }
                {status == 'PEDING' &&
                    <>
                        <img src={wait} alt="logo" className="icon"/>
                        <h1 className="title">Pendente!</h1>
                        <p className="warning">{message}</p>
                        <button className="button-ped"  onClick={()=> setVisible(false)}>Ok</button>
                    </>
                }
            </div>
        </div>
    )

}