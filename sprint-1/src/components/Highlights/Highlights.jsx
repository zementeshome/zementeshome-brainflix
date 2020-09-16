import React from 'react';
import viewsIcon from './../../assets/Icons/SVG/Icon-views.svg';
import likesIcon from './../../assets/Icons/SVG/Icon-likes.svg';

function HighlightsSection() {
    return (
        <section className="app__highlights">
        <div>
        <h1 className="app__highlights-header">BMX Rampage:2018 Highlights</h1>
        <p className="app__highlights-author">By Red Cow</p>
        <p className="app__highlights-date">12/18/2018</p>
        </div>
        <div>
        <img className="app__highlights-viewsicon"src={viewsIcon} alt="maginifying glass" />
        <p className="app__highlights-viewsnumber">1,001,023</p>
        <img className="app__highlights-likesicon"src={likesIcon} alt="maginifying glass" />
        <p className="app__highlights-viewsnumber">110,985</p>
    </div>
    <span className="app__highlights-underline"></span>
    <p className="app__highlights-paragraph">On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title</p>
    </section>
    )
}

export default HighlightsSection