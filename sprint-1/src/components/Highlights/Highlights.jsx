import React from 'react';
// import HighlightsCard from './../HighlightsCard/HighlightsCard';


class Highlights extends React.Component {
    // mainVideo = () => {(this.props.mainVideo)}
    render() {
         
        return (

            <section className="app__highlights">
                <div className="app__highlights-container">
                <img className="app__highlights-viewsicon"src={process.env.PUBLIC_URL + '/assets/Icons/SVG/Icon-views.svg'} alt="eye icon" />
                <img className="app__highlights-likesicon"src={process.env.PUBLIC_URL + '/assets/Icons/SVG/Icon-likes.svg'} alt="heart icon" />
                <div>
                <h1 className="app__highlights-header">
                    {this.props.mainVideo.title}
                </h1>
                <p className="app__highlights-channel">
                    {this.props.mainVideo.channel}
                </p>
                <p className="app__highlights-date">
                    {this.props.mainVideo.date}
                </p>
                <p className="app__highlights-views">
                    {this.props.mainVideo.views}
                </p>
                <p className="app__highlights-likes">
                    {this.props.mainVideo.likes}
                </p>
                <p className="app__highlights-description">
                    {this.props.mainVideo.description}
                </p>
         </div>
                
                {/* {this.props.mainVideo.map((videoInfo, index) => <HighlightsCard key={index} title={videoInfo.title} channel={videoInfo.channel} date={videoInfo.date} views={videoInfo.views} likes={videoInfo.likes} description={videoInfo.description}/>)} */}
                </div>
                </section>
        )
    }
}


export default Highlights 