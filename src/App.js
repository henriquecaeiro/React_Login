//Importando componente de rotas
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';

//Importanção de componentes
import Login from './components/pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
