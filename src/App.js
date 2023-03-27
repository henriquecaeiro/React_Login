// Importação de componentes
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Info from './components/pages/Info';
import Forgot from './components/pages/Forgot';
import Register from './components/pages/Register';
import RequestPassword from './components/pages/RequestPassword';
import Error404 from './components/pages/Error404';

// Importação de pacotes e do contexto da aplicação
import {UserProvider} from './context/userContext';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';

function App() { // Rotas da aplicação
  return (
    <div className="App">
      <Router>
        <UserProvider>
          <Routes>            
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/info' element={<Info/>}/>          
            <Route path='/register' element={<Register/>}/>
            <Route path='/forgot/:resetString/:userId' element={<Forgot/>}/>
            <Route path='/request-reset' element={<RequestPassword/>}/>
            <Route path='/*' element={<Error404/>}/>
          </Routes>
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
