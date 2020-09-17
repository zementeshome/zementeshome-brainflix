import React from 'react';
import HeroCard from './../HeroCard/HeroCard';


class Hero extends React.Component {
    state = {
        
        mainVideo: [

            {title: 'BMX Rampage: 2018 Highlights', channel:'By Red Cow', date: '12/18/2018', views: '1,001,023', likes: '110,985', duration: '0:00/42', video: '/assets/Video/Brainstation-Sample-Video', poster: '/assets/Images/video-list-0.jpg', description:'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title'},

            {
                name: 'Michael Lyons',
                timestamp: '12/18/2018',
                comment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
            },

            {
                name: 'Gary Wong',
                timestamp: '12/12/2018',
                comment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
            },

            {
                name: 'Theodore Duncan',
                timestamp: '11/15/2018',
                comment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
            },
        ]
            
        }

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
                        {this.state.mainVideo.map((videoData) => <HeroCard key={videoData.id} duration={videoData.duration} video={videoData.video} poster={videoData.poster}/>)}
                    </div>
                </section>
            );
        }
    }

    export default Hero
