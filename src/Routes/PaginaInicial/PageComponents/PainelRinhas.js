import '../Dashboard.css';

import { Link } from 'react-router-dom';

const PainelRinhas = () => {
    return (
        <section className="painel-rinhas dash">
            <div className="title-dash">
                <h3>Painel de Rinhas</h3>
                <div className="line"></div>
                <h3>@User</h3>
            </div>

            <div className='cards'>
                <Link className='card-single battle'>
                    <img src='./images/attack.svg'/>

                    <h3>Rinha Aleatoria (Ranked)</h3>
                </Link>

                <Link className='card-single no-battle'>
                    <img src='./images/attack-color.svg'/>

                    <h3>Rinha Amistosa (Sem Rank)</h3>
                </Link>

                <Link className='card-single no-battle'>
                    <img src='./images/attack-color.svg'/>

                    <h3>Rinha com Amigo (Sem Rank)</h3>
                </Link>

                <Link className='card-single no-battle'>
                    <img src='./images/collections.svg'/>

                    <h3>Minha coleção de Galos</h3>
                </Link>

                <Link className='card-single no-battle'>
                    <img src='./images/training.svg'/>

                    <h3>Treinamento Livre</h3>
                </Link>
            </div>
        </section>
    )
}

export default PainelRinhas;