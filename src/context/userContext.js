import { createContext } from "react";// Pacote do contexto
import useAuth from "../hooks/useAuth";//Hook de onde serão semeadas as funções e variáveis


// Contexto da aplicação que semeia as funções e variáveis para os componentes da aplicação
const Context = createContext()

function UserProvider({children}){

  const {status,setStatus,message,setMessage,visible,setVisible,loading,setLoading,login,register,requestReset,forgotPassword} = useAuth()

  return(
    <Context.Provider value={{status,setStatus,message,setMessage,visible,setVisible,loading,setLoading,login,register,requestReset,forgotPassword}}>
      {children}
    </Context.Provider>
  )

}

export {Context, UserProvider}