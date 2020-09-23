import React from 'react';
import './Hero.scss';

class Hero extends React.Component { 

    render() {
    
            return (
                <section className="app__hero">
                    <div className="app__hero-container">
                    <div className="app__hero-videobox">
                        <video className="app__hero-video" poster={process.env.PUBLIC_URL + this.props.mainVideo.image}>
                    </video>
                </div>
                  <div className="app__hero-playbox">
                    <img className="app__hero-playicon"src={process.env.PUBLIC_URL + '/assets/Icons/SVG/Icon-play.svg'} alt="play button"/>
                </div>
                    <div className="app__hero-timebox">
                        <span className="app__hero-timeline"></span>
                        <p className="app__hero-duration">
                        {this.props.mainVideo.duration}
                    </p>
                </div>
                <div className="app__hero-volumebox">
                        <img className="app__hero-fullscreenicon" src={process.env.PUBLIC_URL + '/assets/Icons/SVG/Icon-fullscreen.svg'} alt="fullscreen icon"/>
                        <img className="app__hero-volumeicon"src={process.env.PUBLIC_URL + '/assets/Icons/SVG/Icon-volume.svg' } alt=""/>
                    </div>
                <div>
            </div>
        </div>
</section>
            );
        } 
    }
    export default Hero
