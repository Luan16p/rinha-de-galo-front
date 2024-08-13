import { Routes, Route } from 'react-router-dom';

// Componentes da Rota
import PaginaInicial from './Routes/PaginaInicial/PaginaInicial';
import Entrar from './Routes/Entrar/Entrar';

const RoutesConstructor = ({auth}) => {
    return (
        <Routes>
            <Route path='/' element={<PaginaInicial auth={auth}/>}/>
            <Route path='/entrar' element={<Entrar auth={auth}/>}/>
        </Routes>
    );
}

export default RoutesConstructor;