//importação da api
import api from '../utils/api'
//importação de pacotes
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';


export default function useAuth() {//Hook autenticação da aplicação
  const history = useNavigate()

  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  async function login(user) {//função que manda os dados do user para a rota de login da api
    try {
      await api.post('/user/signin', user).then((response) => {
        setStatus(response.data.status)
        setMessage(response.data.message)
        setVisible(true)
        if(response.data.status == "SUCCESS"){////se o status for "sucesso" redireciona para a home
          history('/')
        }

        return response.data
      })
      setLoading(true)
    } catch (error) {
        console.log(error.message);
        return error.message
    }
  }

  async function register(user){//função que manda os dados do user para a rota de registro da api
    try {
      await api.post('/user/signup', user).then((response)=>{
        setStatus(response.data.status)
        setMessage(response.data.message)
        setVisible(true)
        if(response.data.status == "PEDING"){//se o status for "pendente" redireciona para a tela de login
          history('/login')
        }
        return response.data
      })
      setLoading(true)
    } catch (error) {
      console.log(error.message);
      return error.message
    }    
  }

  async function requestReset(user){//função que manda o email para o usuário mudar a senha através da api
    try{
      await api.post('/user/requestPasswordReset',user).then((response)=>{
        setStatus(response.data.status)
        setMessage(response.data.message)
        setVisible(true)
        if(response.data.status == "PEDING"){//se o status for "pendente" redireciona para a tela de login
          history('/login')
        }
      })
      setLoading(true)
    }catch(error){
      console.log(error.message);
      return error.message
    }

  }

  async function forgotPassword(user){//função que manda os dados do user para api e muda sua senha
    try {
      await api.post('/user/resetPassword',user).then((response)=>{
        setStatus(response.data.status)
        setMessage(response.data.message)
        setVisible(true)
        if(response.data.status == "SUCCESS"){//se o status for "sucesso" redireciona para a tela de login
          history('/login')
        }
      })
    } catch (error) {
      console.log(error.message);
      return error.message
    }
  }

  return {status,setStatus,message,setMessage,visible,setVisible,loading,setLoading,login,register,requestReset,forgotPassword}
}
