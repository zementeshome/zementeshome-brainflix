import React from 'react';

class AsideCard extends React.Component {
    render() {
        console.log(this.props.image);


    return (
        <div>
            <h4 className="app__aside-title">
                {this.props.content}
            </h4>
            <p className="app__aside-channel">
                {this.props.channel}
            </p>
            <img className="app__aside-image"src={process.env.PUBLIC_URL + this.props.image} alt=""/>
        </div>
    );
  }

}

export default AsideCard;