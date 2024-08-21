import './PaginaInicial.css';

import RinhasRecentes from "./PageComponents/RinhasRecentes";
import RinhasAoVivo from './PageComponents/RinhasAoVivo';
import RanksCampeoes from './PageComponents/RanksCampeoes';
import PainelRinhas from './PageComponents/PainelRinhas';
import Navbar from '../../Components/Navbar/Navbar';
import AlertUsers from '../../Components/MUI/Alert'

const PaginaInicial = ({auth}) => {
    return (
        <>
        <Navbar auth={auth}/>
        
        <main>

            {  auth ? <PainelRinhas/> : null }
            
            <RinhasRecentes/>
            <RinhasAoVivo/>
            <RanksCampeoes/>
        </main>

        <AlertUsers/>
        </>
    );
}

export default PaginaInicial;