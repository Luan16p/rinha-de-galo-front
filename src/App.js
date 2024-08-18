import { BrowserRouter } from 'react-router-dom';

import './Styles/Global.css';
import './Styles/Fonts.css';

import Navbar from './Components/Navbar/Navbar';

import RoutesConstructor from './RoutesConstructor';
import AlertUsers from './Components/MUI/Alert';


function App() {
  // Variavel Auth será um estado temporario para facilitar ver as telas com autenticação.

  const Auth = false;

  return (
    <BrowserRouter>
      <Navbar auth={Auth}/>
      <RoutesConstructor auth={Auth}/>

      <AlertUsers/>
    </BrowserRouter>
  );
}

export default App;
