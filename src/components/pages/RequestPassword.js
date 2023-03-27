//Importação de  pacotes e componentes
import React,{useContext,useState} from 'react';
import './RequestPassword.css';
import {Context} from '../../context/userContext';
import Modal from '../pop_ups/Modal';
import load from '../../assets/loading.gif';

function RequestPassword() {//Pág para pedir o reset de senha

  const { requestReset,visible,loading,setLoading } = useContext(Context)//funções e variáveis vindas do contexto
  const [user,setUser] = useState({
    'redirectUrl': 'http://localhost:3000/forgot'
  })//Objeto com os dados do usuário, com url de redirecionamento fixo

  function submit(e){//Enviar dados para a api
    e.preventDefault()
    setLoading(true)
    requestReset(user)
  }


  return (
    <div className="containter-request">
    {visible && <Modal/>}{/*modal de aviso ficará visivel ao enviar formulário */}
    <div className="bg-request">
        <form className="form-request" onSubmit={submit}>
            <p className='title-request'>Esqueceu sua senha?</p>
            <p className='phrase-request'>Coloque seu email aqui que enviaremos um email para você mudar sua senha.</p>
            <input type="email" name="email" id="email-request" onChange={(e)=>{setUser({...user,[e.target.name]: e.target.value})}}/>
            {/*tela de carregamento*/}
            {loading ? <><input type="submit" value="" id="submit-request"/> <img src={load} alt="loading" className='load-request'/></> : <input type="submit" value="Enviar" id="submit-request"/>}
        </form>
    </div>
</div>
  )
}

export default RequestPassword