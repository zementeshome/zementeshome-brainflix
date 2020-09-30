import React from 'react';

class CommentsCard extends React.Component {
    render() {
    return (
        <div>
             <span className="app__comments-line"></span>
                <div className="app__comments-container">
                <span className="app__comments-icon"></span>
                        <h3 className="app__comments-username">
                            {this.props.name}
                        </h3>
                        <p className="app__comments-timestamp">
                            {this.props.timestamp}
                        </p>
                        <p className="app__comments-comment">
                            {this.props.comment}
                        </p>
                 </div>
            </div>
        );
    }
}

export default CommentsCard;