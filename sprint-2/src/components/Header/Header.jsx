import React from 'react';
import './Header.scss';

function Header(props) {
    return (
    <header className="app__header">
        <div className="app__header-container">
            <img className ="app__header-logo" src={process.env.PUBLIC_URL + '/assets/Logo/Logo-brainflix.svg'} alt="brainflix logo" />
                <input className="app__header-search"type='text' placeholder="Search"/>
                <img className="app__header-searchicon"src={process.env.PUBLIC_URL + '/assets/Icons/SVG/Icon-search.svg'} alt="maginifying glass" />
        </div>
                <button className="app__header-button" type="button">UPLOAD</button>
                <img className="app__header-buttonicon"src={process.env.PUBLIC_URL + '/assets/Icons/SVG/Icon-upload.svg'} alt="plus sign" />
                <img className ="app__header-usericon" src={process.env.PUBLIC_URL + props.userImage} alt="user profile circle" />
        </header>
    )
}

export default Header
