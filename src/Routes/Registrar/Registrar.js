import * as React from 'react';
import './Registrar.css';
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Button, TextField } from '@mui/material';

const Registrar = ({ auth }) => {
    const [passwordsAreDifferents, setPasswordsAreDifferents] = useState(false);
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirm, setPasswordConfirm] = useState();

    const handleChangeConfirm = (e) => {
        if(passwordConfirm == "") setPasswordsAreDifferents(false); // Exceção 

        setPasswordsAreDifferents(e.target.value != password);
        setPasswordConfirm(e.target.value);
    }

    const handleSubmit = () => {
        console.log({username, password, email});
    }

    const isCredEmpty = () => {
        return username == "" || email == "" || password == "";
    }

    if (auth) {
        return <Navigate to="/" />;
    }

    return (
        <main className='sign-up-page'>
            <div className='side-form'></div>

            <form className='sign-up' onSubmit={handleSubmit}>


                <Link className="logo" to={"/"}>
                    <img src="images/logo.png" alt='Logo do App' />
                    <h2>Rinhas.com</h2>
                </Link>

                <div className='form'>
                    <h2 className='sign-up-title'>Seja bem-vindo(a)! Preencha para começar.</h2>

                    <div className='input-group'>
                        <TextField
                            label="Nome de Usuário"
                            type='text'
                            id="username"
                            onChange={(e) => setUsername(e.target.value)}
                            variant="standard"
                        />

                        <TextField
                            label="E-mail"
                            type='email'
                            id="e-mail"
                            onChange={(e) => setEmail(e.target.value)}
                            variant="standard"
                        />

                        <TextField
                            label="Senha"
                            type='password'
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            variant="standard"
                        />


                        <TextField
                            label="Confirmar senha"
                            type='password'
                            id="password"
                            onChange={handleChangeConfirm}
                            variant="standard"
                        />

                        {passwordsAreDifferents && passwordConfirm ? <span className='password-different'>Senhas são diferentes</span> : null}

                        <Button variant="outlined" type={passwordsAreDifferents || isCredEmpty ? "button" : "submit"}>Criar conta</Button>
                    </div>

                    <Link className="already-registered" to={"/sign-in"}>
                        <h2>Já possui uma conta? Faça login</h2>
                    </Link>

                </div>
            </form>
        </main>
    );
}

export default Registrar;