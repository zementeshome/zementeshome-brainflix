import React from 'react';

class AsideCard extends React.Component {
    render() {


    return (
        <div>
             <div className="app__aside-container">
            <img className="app__aside-image"src={process.env.PUBLIC_URL + this.props.image} alt=""/>
            <h4 className="app__aside-title">
                {this.props.content}
            </h4>
        </div>
        <p className="app__aside-channel">
                {this.props.channel}
            </p>
        </div>
    );
  }

}

export default AsideCard;