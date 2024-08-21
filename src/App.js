import { BrowserRouter } from 'react-router-dom';

import './Styles/Global.css';
import './Styles/Fonts.css';

import RoutesConstructor from './RoutesConstructor';


function App() {
  // Variavel Auth será um estado temporario para facilitar ver as telas com autenticação.

  const Auth = false;

  return (
    <BrowserRouter>
      <RoutesConstructor auth={Auth}/>
    </BrowserRouter>
  );
}

export default App;
