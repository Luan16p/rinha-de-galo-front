const RanksCampeoes = () => {
    return (
        <section className="ranks">
            <h2 className='title'>Maiores Campeoes ( Rank )</h2>

            <table className='ranks-table box-show-info-fight'>
                <tr className='header-table'>
                    <td>#</td>
                    <td>Jogador</td>
                    <td>Galo Campeao</td>
                    <td>N° de vitorias</td>
                </tr>

                <tr>
                    <td><img src="./images/helmet.svg" /></td>
                    <td>@Usuario </td>
                    <td>Blind Rooster</td>
                    <td>200</td>
                </tr>
                <tr>
                    <td><img src="./images/helmet.svg" /></td>
                    <td>@Usuario </td>
                    <td>Blind Rooster</td>
                    <td>200</td>
                </tr>
                <tr>
                    <td><img src="./images/helmet.svg" /></td>
                    <td>@Usuario </td>
                    <td>Blind Rooster</td>
                    <td>200</td>
                </tr>
                <tr>
                    <td><img src="./images/helmet.svg" /></td>
                    <td>@Usuario </td>
                    <td>Blind Rooster</td>
                    <td>200</td>
                </tr>
            </table>
        </section>
    );
}

export default RanksCampeoes;