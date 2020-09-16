import React from 'react';
// import video from './../../assets/Video/BrainStation-Sample-Video.mp4';
import heroImage from './../../assets/Images/video-list-0.jpg'
import playIcon from './../../assets/Icons/SVG/Icon-play.svg'
import fullscreenIcon from './../../assets/Icons/SVG/Icon-fullscreen.svg';
import volumeIcon from './../../assets/Icons/SVG/Icon-volume.svg';


function Hero() {
    return (
    <section className="app__hero">
        <video className="app__hero-poster" poster={heroImage}></video>
        <div className="app__hero-container">
        <div className="app__hero-playbox">
        <img className="app__hero-playicon"src={playIcon} alt="play button"/>
        </div>
        <div className="app__hero-timebox">
            <span className="app__hero-timeline"></span>
            <p className="app__hero-videotime">0:00/42</p>
            </div>
            <div className="app__hero-volumebox">
            <img className="app__hero-fullscreenicon" src={fullscreenIcon} alt="fullscreen icon"/>
            <img className="app__hero-volumeicon"src={volumeIcon} alt=""/>
            </div>
        </div>
    </section>
    )
}

    export default Hero