import React from 'react';
import './Highlights.scss';

class Highlights extends React.Component {
    render() {
        return (
            <section className="app__highlights">
                    <h1 className="app__highlights-header">
                    {this.props.mainVideo.title}
                    </h1>
                <div className="app__highlights-wrap">
                    <p className="app__highlights-channel">
                    {this.props.mainVideo.channel}
                    </p>
                    <p className="app__highlights-date">
                    {this.props.mainVideo.timestamp}
                    </p>
                </div>
                <div className="app__highlights-container">
                    <img className="app__highlights-viewsicon"src={process.env.PUBLIC_URL + '/assets/Icons/SVG/Icon-views.svg'} alt="eye icon" />
                    <p className="app__highlights-views">
                    {this.props.mainVideo.views}
                    </p>
                    <img className="app__highlights-likesicon"src={process.env.PUBLIC_URL + '/assets/Icons/SVG/Icon-likes.svg'} alt="heart icon" />
                    <p className="app__highlights-likes">
                    {this.props.mainVideo.likes}
                </p>
            </div>
                    <span className="app__highlights-underline"></span>
                    <p className="app__highlights-description">
                    {this.props.mainVideo.description}
                    </p>
            </section>
          )
        }
      }
      
export default Highlights 