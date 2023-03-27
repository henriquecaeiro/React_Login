//Importação de  pacotes e componentes
import React,{useContext,useState} from "react";
import './Forgot.css';
import { Context } from "../../context/userContext";
import {useLocation} from 'react-router-dom';
import Modal from "../pop_ups/Modal";
import load from '../../assets/loading.gif'

function Forgot(){// Página para o usuário colocar sua senha

    const location = useLocation(); // Hook para pegar a url da pág
    const [user,setUser] = useState({
        'userId': `${location.pathname.split("/")[2]}`,
        'resetString' : `${location.pathname.split("/")[3]}`
    });//Variáveis fixas q vêm da url

    const [confirm,setConfirm] = useState(''); 

    const {visible,setVisible,setStatus,setMessage,loading,setLoading,forgotPassword} = useContext(Context) // Funções e variávies vindas do contex do app


    function changeTypeSenha(e){

        let olho = e.target.classList
        let input = document.getElementById('password-forgot')
    
        if(olho == 'olho-fechado-senha' ){
            e.target.classList = 'olho-senha';
            input.type = 'text';
        }else{
            e.target.classList = 'olho-fechado-senha';
            input.type = 'password';
        }
    
    }// Função para trocar a visibilidade do campo
    
    function changeTypeConfirm(e){
        let olho = e.target.classList
        let input = document.getElementById('confirm-forgot')
    
        if(olho == 'olho-fechado-confirm' ){
            e.target.classList = 'olho-confirm';
            input.type = 'text';
        }else{
            e.target.classList = 'olho-fechado-confirm';
            input.type = 'password';
        }
    }// Função para trocar a visibilidade do campo  


    
    function submit(e){// Enviar dados para api 
        e.preventDefault()
        console.log(user);
        setLoading(true)
        if(user.newPassword != confirm){// se os campos estiverem diferentes ou vazio emite erro
            setStatus('FAILED')
            setVisible(true)
            setMessage('A senhas digitadas não conhecidem ou estão em branco, tente novamente.')
        }
        forgotPassword(user)
    }
    

    return(
        <div className="containter-forgot">
            <div className="bg-forgot">
                {visible && <Modal/>} {/*modal de aviso ficará visivel ao enviar formulário */}
                <form className="form-forgot" onSubmit={submit}>
                    <h1 className="title-forgot">Digite sua nova senha:</h1>
                    <input type="password" name="newPassword" id="password-forgot" onChange={(e)=>{setUser({...user,[e.target.name]: e.target.value})}}/>{/*função local para guadar os dados impressos no objeto */}
                    <span className='olho-fechado-senha' onClick={changeTypeSenha}></span>
                    <input type="password" name="confirm" id="confirm-forgot" onChange={(e)=>{setConfirm(e.target.value)}}/>{/*função local para guadar os dados impressos no objeto */}
                    <span className='olho-fechado-confirm' onClick={changeTypeConfirm}></span>
                    {/* Rendiricação condicional baseado no carregamento da api*/}
                    {loading ? <><input type="submit" value="" id="submit-forgot"/><img src={load} alt="loading" className='load-forgot'/></>: <input type="submit" value="Enviar" id="submit-forgot"/>}
                </form>
            </div>
        </div>
    )

}

export default Forgot