import React from 'react';

class CommentsCard extends React.Component {
    render() {


    return (
        <div>
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
    );
  }

}

export default CommentsCard;