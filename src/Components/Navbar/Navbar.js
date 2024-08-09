import React from 'react';
import './Navbar.css'

import { Link } from 'react-router-dom';
import Dropdown from '../MUI/Dropdown';

const Navbar = () => {
    return (
        <header>
            <nav className='navbar'>
                <div className='navbar-flex-grep'></div>
                <Link className="Logo" to={"/"}>
                    <img src="images/logo.png" alt='Logo do App'/>
                    <h2>Rinhas.com</h2>
                </Link>

                <div className='navlist'>
                    <Link className="btn-entrar" to="/entrar">
                        Entrar
                    </Link>

                    <Dropdown/>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;