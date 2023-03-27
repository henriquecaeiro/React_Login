import axios from 'axios' //Criando conexexão com a api 

export default axios.create({
    baseURL: 'https://login-api-2aud.onrender.com/'
})