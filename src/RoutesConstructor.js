import { Routes, Route } from 'react-router-dom';

// Componentes da Rota
import PaginaInicial from './Routes/PaginaInicial/PaginaInicial';

const RoutesConstructor = ({auth}) => {
    return (
        <Routes>
            <Route path='/' element={<PaginaInicial auth={auth}/>}/>
      </Routes>
    );
}

export default RoutesConstructor;