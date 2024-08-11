import React from 'react';
import './Navbar.css'

import { Link } from 'react-router-dom';
import Dropdown from '../MUI/Dropdown';
import ProfileOptions from '../MUI/ProfileOptions';

const Navbar = ({auth}) => {
    return (
        <header>
            <nav className='navbar'>
                <div className='navbar-flex-grep'></div>
                <Link className="Logo" to={"/"}>
                    <img src="images/logo.png" alt='Logo do App'/>
                    <h2>Rinhas.com</h2>
                </Link>

                <div className='navlist'>
                    <Dropdown/>
                    
                    {!auth ? <Link className="btn-entrar" to="/entrar">Entrar </Link> : <ProfileOptions/>}
                </div>
            </nav>
        </header>
    );
}

export default Navbar;