import React, { Component } from 'react'

class VideoDetails extends Component {
    render() {
        const { id } = this.props.match.params;
        // console.log(props)
        return (
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
}

export default VideoDetails;

