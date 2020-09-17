import React from 'react';

class HighlightsCard extends React.Component {

    render() {
        
        return (
            <div>
                <h1 className="app__highlights-header">
                    {this.props.title}
                </h1>
                <p className="app__highlights-channel">
                    {this.props.channel}
                </p>
                <p className="app__highlights-date">
                    {this.props.date}
                </p>
                <p className="app__highlights-views">
                    {this.props.views}
                </p>
                <p className="app__highlights-likes">
                    {this.props.likes}
                </p>
                <p className="app__highlights-description">
                    {this.props.description}
                </p>
         </div>
        )
    }
}

export default HighlightsCard;