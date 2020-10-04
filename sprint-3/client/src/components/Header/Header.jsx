import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
    <header className="app__header">
        <div className="app__header-container">
            <Link to="/"><img className ="app__header-logo" src={process.env.PUBLIC_URL + '/assets/Logo/Logo-brainflix.svg'} alt="brainflix logo" /></Link>
                <input className="app__header-search"type='text' placeholder="Search"/>
                <img className="app__header-searchicon"src={process.env.PUBLIC_URL + '/assets/Icons/SVG/Icon-search.svg'} alt="maginifying glass" />
        </div>
                <Link to="/videoupload" style={{textDecoration: 'none'}}><button className="app__header-button" type="button" style={{fontFamily: 'Avenir', fontSize: '14px'}}>UPLOAD</button></Link>
                <img className="app__header-buttonicon"src={process.env.PUBLIC_URL + '/assets/Icons/SVG/Icon-upload.svg'} alt="plus sign" />
                <img className ="app__header-usericon" src={process.env.PUBLIC_URL + props.userImage} alt="user profile circle" />
        </header>
       )
     }
     
export default Header
