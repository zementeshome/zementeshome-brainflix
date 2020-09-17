import React from 'react';
// import HeroCard from './../HeroCard/HeroCard';

class Hero extends React.Component { 

    render() {
    
            return (
                <section className="app__hero">
                    <div className="app__hero-container">
                  <div className="app__hero-playbox">
                  <img className="app__hero-playicon"src={process.env.PUBLIC_URL + '/assets/Icons/SVG/Icon-play.svg'} alt="play button"/>
       </div>
                    <div className="app__hero-timebox">
             <span className="app__hero-timeline"></span>
                </div>
                <div className="app__hero-volumebox">
                <img className="app__hero-fullscreenicon" src={process.env.PUBLIC_URL + '/assets/Icons/SVG/Icon-fullscreen.svg'} alt="fullscreen icon"/>
                <img className="app__hero-volumeicon"src={process.env.PUBLIC_URL + '/assets/Icons/SVG/Icon-volume.svg' } alt=""/>
            </div>
            <div>
            <p className="app__hero-duration">
                {this.props.mainVideo.duration}
            </p>
            <video className="app__hero-video" poster={process.env.PUBLIC_URL + this.props.mainVideo.poster}>
            </video>
        </div>
                        {/* {props.mainVideo.map((videoData, index) => <HeroCard key={index} duration={videoData.duration} poster={videoData.poster}/>)} */}
                    </div>
                </section>
            );
        }  // this.props.mainVideo
    }
    export default Hero
