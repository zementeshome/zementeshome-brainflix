import React from 'react';
import HighlightsCard from './../HighlightsCard/HighlightsCard';
import Hero from './../Hero/Hero';

class Highlights extends React.Component {

    state =  {

        mainVideo: [ <Hero />
        ]
    }
    render() {

        return (
            <section className="app__highlights">
                <div className="app__highlights-container">
                <img className="app__highlights-viewsicon"src={process.env.PUBLIC_URL + '/assets/Icons/SVG/Icon-views.svg'} alt="maginifying glass" />
                <img className="app__highlights-likesicon"src={process.env.PUBLIC_URL + '/assets/Icons/SVG/Icon-likes.svg'} alt="heart icon" />
                
                {this.state.mainVideo.map((videoInfo) => <HighlightsCard key={videoInfo.id} title={videoInfo.title} channel={videoInfo.channel} date={videoInfo.date} views={videoInfo.views} likes={videoInfo.likes} description={videoInfo.description}/>)}
                </div>
                </section>
        )
    }
}


export default Highlights