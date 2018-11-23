import React from 'react';
import './styles.css'
import logo from './pokeball.png';

console.log(logo);
const Header = () => (
    <header id="main-header">
        <img src={logo} className={"logo"}/>
        <h1 className={"title"} >Pokedash</h1>
    </header>
);

export default Header;