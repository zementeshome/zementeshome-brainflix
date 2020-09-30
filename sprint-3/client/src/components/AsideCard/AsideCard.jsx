import React from 'react';
import { Link } from "react-router-dom";

class AsideCard extends React.Component {
    render() {
    return (
        <Link to={`/videos/${this.props.commentId}`} style={{textDecoration: 'none', color: 'black'}}>
        <div>
             <div className="app__aside-container">
                <img className="app__aside-image"src={process.env.PUBLIC_URL + this.props.image} alt=""/>
                <h4 className="app__aside-title">
                {this.props.content}
            </h4>
        </div>
        <div className="app__aside-channelcontainer">
            <p className="app__aside-channel">
                {this.props.channel}
            </p>
        </div>
    </div>
</Link>
    );
  }

}

export default AsideCard;