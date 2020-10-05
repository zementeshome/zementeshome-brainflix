import React, { Component } from 'react'
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Highlights from '../Highlights/Highlights';
import Form from '../Form/Form';
import Comments from '../Comments/Comments';
import Aside from '../Aside/Aside';
import './Home.scss';
import Axios from 'axios';

class Home extends Component {
  state = {
    userImage: '/assets/Images/Mohan-muruge.jpg',
    mainVideo: {
      commentsArr: []
    },
    sideVideo: []
  }
  
  componentDidMount() {
    Axios.get('http://localhost:8022/videos')
      .then(response => {
        Axios.get('http://localhost:8022/videos/1af0jruup5gu')
          .then(res => {
            // timestamp for video playing 
            let time = new Date(res.data.timestamp)
            res.data.timestamp = time.toLocaleDateString();
            // timestamp for comments 
            let commentsTime = new Date(res.data.comments[0].timestamp)
            res.data.comments[0].timestamp = commentsTime.toLocaleDateString();

            let commentsTime2 = new Date(res.data.comments[1].timestamp)
            res.data.comments[1].timestamp = commentsTime2.toLocaleDateString();

            let commentsTime3 = new Date(res.data.comments[2].timestamp)
            res.data.comments[2].timestamp = commentsTime3.toLocaleDateString();

            let mainVideo = res.data
            mainVideo.commentsArr = res.data.comments

            this.setState({
              mainVideo: mainVideo,
              sideVideo: response.data.sideVideo
            })
          })
        })
      .catch(error => {
        console.log(error)
      })
    }

  componentDidUpdate(prevProps) {
    if (this.props && prevProps && prevProps.match && prevProps.match.params.id !== this.props.match.params.id) {
      Axios.get(`http://localhost:8022/videos/${this.props.match.params.id}`)
        .then(response => {
            let nextVideoTime = new Date(response.data.timestamp)
            response.data.timestamp = nextVideoTime.toLocaleDateString();
            
            let nextVideoComment = new Date(response.data.comments[0].timestamp)
            response.data.comments[0].timestamp = nextVideoComment.toLocaleDateString();

            let nextVideoComment2 = new Date(response.data.comments[1].timestamp)
            response.data.comments[1].timestamp = nextVideoComment2.toLocaleDateString();

            let nextVideoComment3 = new Date(response.data.comments[2].timestamp)
            response.data.comments[2].timestamp = nextVideoComment3.toLocaleDateString();
  
          this.setState({
            ...this.state,
            mainVideo: {...response.data, commentsArr: response.data.comments},
          })
        })
        .catch(error => {
          console.log(error, "No video with that id exists")
        })
      }
    }

  render() {
    return (
      <div className="app">
          <Header userImage={this.state.userImage} />
          <main className="app__main">
            <Hero mainVideo={this.state.mainVideo} />
            <div className="app__main-div">
            <div className="app__aside-left">
            <Highlights mainVideo={this.state.mainVideo} />
            <Form userImage={this.state.userImage} />
            <div className="app__comments-container">
              <Comments mainVideo={this.state.mainVideo.commentsArr} />
            </div>
            </div>
            <div className="app__aside-right">
            <Aside sideVideo={this.state.sideVideo} mainVideo={this.state.mainVideo} />
            </div>
            </div>
          </main>
      </div>
    )
  }
}

export default Home;
