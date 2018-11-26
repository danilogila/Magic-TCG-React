import React from 'react';
import './styles.css'
import logo from './logo.png';

const Header = () => (
    <header id="main-header">
        <img src={logo} className={"logo"}/>
        <h1 className={"title"} >Magic The Gathering</h1>
    </header>
);

export default Header;