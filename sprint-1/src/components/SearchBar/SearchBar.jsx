import React from 'react';
import searchIcon from './../../assets/Icons/SVG/Icon-search.svg'


function SearchBar() {
    return (
        <div>
            <input className="app__header-search"type='text' placeholder="Search"/>
            <img className="app__header-searchicon"src={searchIcon} alt="maginifying glass" />
        </div>
    )
}

export default SearchBar

