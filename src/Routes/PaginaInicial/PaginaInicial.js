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
        
        <main className='pagina-inicial'>

            {  auth ? <PainelRinhas/> : null }
            
            <RinhasRecentes/>
            <RinhasAoVivo/>
            <RanksCampeoes/>
        </main>

        <AlertUsers type={"error"} place={" Atenção: Este conteúdo é apenas uma brincadeira. Rinhas de galo são ilegais e cruéis. Jamais promova ou participe de qualquer atividade desse tipo."}/>
        </>
    );
}

export default PaginaInicial;