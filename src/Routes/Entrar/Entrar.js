import { Navigate } from "react-router-dom";

const Entrar = ({auth}) => {
    if(auth) {
        return <Navigate to="/"/>
    }
    
    return (
        <main>
            <form>
                <h2>Faça Login!!!</h2>
            </form>
        </main>
    );
}

export default Entrar;