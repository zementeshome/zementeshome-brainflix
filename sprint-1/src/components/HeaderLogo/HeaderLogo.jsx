import React from 'react';
import logo from './../../assets/Logo/Logo-brainflix.svg';

console.log(logo)

function HeaderLogo() {
    return <img className ="App__header-logo" src={logo} alt="brainflix logo" />;
}

export default HeaderLogo
