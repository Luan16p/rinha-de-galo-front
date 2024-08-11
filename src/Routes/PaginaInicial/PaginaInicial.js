import './PaginaInicial.css';

import RinhasRecentes from "./PageComponents/RinhasRecentes";
import RinhasAoVivo from './PageComponents/RinhasAoVivo';
import RanksCampeoes from './PageComponents/RanksCampeoes';
import PainelRinhas from './PageComponents/PainelRinhas';

const PaginaInicial = ({auth}) => {
    return (
        <main>
            {  auth ? <PainelRinhas/> : null }
            
            <RinhasRecentes/>
            <RinhasAoVivo/>
            <RanksCampeoes/>
        </main>
    );
}

export default PaginaInicial;