import * as React from 'react';
import './Entrar.css';
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Button, TextField } from '@mui/material';

const Entrar = ({ auth }) => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });

    if (auth) {
        return <Navigate to="/" />;
    }

    const handleChange = (e) => {
        const { id, value } = e.target;
        setCredentials(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const postFormData = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://${process.env.REACT_APP_API_BASE_URL}submit-credentials`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                throw new Error('O Servidor devolveu uma mensagem de erro, mas a requisição foi enviada!');
            }

            const data = await response.json();
            console.log(data);

        } catch (error) {
            console.error("Erro ao enviar requisição para o servidor, verifique se ele está funcionando corretamente!");
        }
    };

    return (
        <main className='sign-in-page'>
            <form className='sign-in' onSubmit={postFormData}>
                <div className='title'>
                    <h2>Entre Agora mesmo!</h2>
                    <p>Suas Rinhas de galo estão te esperando</p>
                </div>

                <div className='input-group'>
                    <TextField 
                        fullWidth 
                        label="Nome de Usuário" 
                        type='text' 
                        onChange={handleChange} 
                        id="username" 
                    />
                    <TextField 
                        fullWidth 
                        label="Senha" 
                        type='password' 
                        onChange={handleChange} 
                        id="password" 
                    />
                </div>

                <div className='buttons'>
                    <Button variant="contained" type='submit'>Entrar</Button>
                    <span>OU</span>
                    <Button variant="outlined" href="/sign-up">Cadastrar-se</Button>
                </div>
            </form>
        </main>
    );
};

export default Entrar;
