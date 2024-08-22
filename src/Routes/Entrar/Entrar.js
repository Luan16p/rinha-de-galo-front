import * as React from 'react';
import './Entrar.css';
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Button, Chip, TextField } from '@mui/material';

const Entrar = ({ auth }) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    if (auth) {
        return <Navigate to="/" />;
    }

    const postFormData = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://${process.env.REACT_APP_API_BASE_URL}submit-credentials`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({username, password}),
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
            <div className='side-form-sign-in'></div>

            <form className='sign-in' onSubmit={postFormData}>

                <Link className="logo" to={"/"}>
                    <img src="images/logo.png" alt='Logo do App' />
                    <h2>Rinhas.com</h2>
                </Link>

                <div className='form'>
                    <h2 className='sign-in-title'>Bem vindo(a) de volta!</h2>
                
                    <div className='input-group'>
                        <TextField
                            label="Nome de Usuário"
                            type='text'
                            onChange={(e) => setUsername(e.target.value)}
                            id="username"
                            variant="standard"
                        />
                        <TextField
                            label="Senha"
                            type='password'
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"
                            variant="standard"
                        />
                    </div>

                    <div className='buttons'>
                        <Button variant="contained" type='submit'>Entrar</Button>
                        <span>OU</span>
                        <Button variant="outlined" href="/sign-up">Cadastrar-se</Button>
                    </div>
                </div>
            </form>
        </main>
    );
};

export default Entrar;
