import React from 'react';
import searchIcon from './../../assets/Icons/SVG/Icon-search.svg'


function SearchBar() {
    return (
        <div>
            <input className="header__search-bar"type='text' placeholder="Search"/>
            <img className="header__search-icon"src={searchIcon} alt="maginifying glass" />
        </div>
    )
}

export default SearchBar

