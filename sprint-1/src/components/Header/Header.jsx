import React from 'react';
import logo from './../../assets/Logo/Logo-brainflix.svg';
import searchIcon from './../../assets/Icons/SVG/Icon-search.svg'
import uploadIcon from './../../assets/Icons/SVG/Icon-upload.svg'
import userImage from './../../assets/Images/Mohan-muruge.jpg'

function Header() {
    return (
    <header className="app__header">
        <img className ="App__header-logo" src={logo} alt="brainflix logo" />
            <input className="app__header-search"type='text' placeholder="Search"/>
            <img className="app__header-searchicon"src={searchIcon} alt="maginifying glass" />
            <button className="app__header-button" type="button">UPLOAD</button>
            <img className="app__header-buttonicon"src={uploadIcon} alt="plus sign" />
            <img className ="app__header-usericon" src={userImage} alt="user profile circle" />;
    </header>
    )
}

export default Header
