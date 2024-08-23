import { BrowserRouter } from 'react-router-dom';

import './Styles/Global.css';
import './Styles/Fonts.css';

import RoutesConstructor from './RoutesConstructor';

function App() {
  return (
    <BrowserRouter>
      <RoutesConstructor auth={true}/>
    </BrowserRouter>
  );
}

export default App;
