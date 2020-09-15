import React from 'react';
import viewsIcon from './../../assets/Icons/SVG/Icon-views.svg';
import likesIcon from './../../assets/Icons/SVG/Icon-likes.svg'


function ViewsandLikes() {
    return (
        <div>
            <img className="app__highlights-viewsicon"src={viewsIcon} alt="maginifying glass" />
            <p className="app__highlights-viewsnumber">1,001,023</p>
            <img className="app__highlights-likesicon"src={likesIcon} alt="maginifying glass" />
            <p className="app__highlights-viewsnumber">110,985</p>
        </div>
    )
}

export default ViewsandLikes
