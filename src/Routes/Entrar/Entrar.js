import * as React from 'react';
import './Entrar.css';
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Button, TextField } from '@mui/material';

const Entrar = ({ auth }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    if (auth) {
        return <Navigate to="/" />
    }

    async function handleChangeUsername(e) {
        setUsername(e.target.value);
    }
    
    async function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    async function postFormData(e) {
        e.preventDefault();

        try {
            const response = await fetch(`http://${process.env.REACT_APP_API_BASE_URL}submit-credentials`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error('Erro na resposta da requisição');
            }

            const data = await response.json();
            console.log(data);

        } catch (e) {
            console.error("Erro ao validar requisição", e);
        }
    }
    
    return (
        <main className='sign-in-page'>
            <form className='sign-in' onSubmit={postFormData}>
                <div className='title'>
                    <h2>Entre Agora mesmo!</h2>
                    <p>Suas Rinhas de galo estão te esperando</p>
                </div>

                <div className='input-group'>
                    <TextField fullWidth label="Nome de Usuario" type='text' onChange={handleChangeUsername} id="username" />
                    <TextField fullWidth label="Senha" type='password' onChange={handleChangePassword} id="password" />
                </div>

                <div className='buttons'>
                    <Button variant="contained" type='submit'>Entrar</Button>
                    <span>OU</span>
                    <Button variant="outlined" href="/sign-up">Cadastrar-se</Button>
                </div>
            </form>
        </main>
    );
}

export default Entrar;
