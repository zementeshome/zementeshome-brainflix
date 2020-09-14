import React from 'react';
import logo from './../../assets/Logo/Logo-brainflix.svg';

console.log(logo)

function HeaderLogo() {
    return <img className ="header__logo" src={logo} alt="brainflix logo" />;
}

export default HeaderLogo
