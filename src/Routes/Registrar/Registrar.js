import * as React from 'react';
import './Registrar.css';
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Button, TextField } from '@mui/material';

const Registrar = ({auth}) => {
    if(auth) {
        return <Navigate to="/"/>;
    }

    return (
        <main className='sign-up-page'>
            
        </main>
    );
}

export default Registrar;