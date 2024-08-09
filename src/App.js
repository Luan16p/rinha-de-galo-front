import { BrowserRouter } from 'react-router-dom';

import './Styles/Global.css';
import './Styles/Fonts.css';

import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
    </BrowserRouter>
  );
}

export default App;
