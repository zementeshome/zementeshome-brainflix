import React from 'react';

class HeroCard extends React.Component {
    render() {
        // console.log(this.props.image);


    return (
        <div>
            <p className="app__hero-duration">
                {this.props.duration}
            </p>

            <video className="app__hero-video"src={process.env.PUBLIC_URL + this.props.video} poster={process.env.PUBLIC_URL + this.props.poster}>
            </video>
        </div>
    );
  }

}

export default HeroCard;

