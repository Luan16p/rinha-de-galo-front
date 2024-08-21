import { Routes, Route } from 'react-router-dom';

// Componentes da Rota
import PaginaInicial from './Routes/PaginaInicial/PaginaInicial';
import Entrar from './Routes/Entrar/Entrar';
import Registrar from './Routes/Registrar/Registrar';

const RoutesConstructor = ({auth}) => {
    return (
        <Routes>
            <Route path='/' element={<PaginaInicial auth={auth}/>}/>
            <Route path='/sign-in' element={<Entrar auth={auth}/>}/>
            <Route path='/sign-up' element={<Registrar auth={auth}/>}/>
        </Routes>
    );
}

export default RoutesConstructor;