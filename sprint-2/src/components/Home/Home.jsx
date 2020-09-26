import React, { Component } from 'react'
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Highlights from '../Highlights/Highlights';
import Form from '../Form/Form';
import Comments from '../Comments/Comments';
import Aside from '../Aside/Aside';
import Axios from 'axios'

class Home extends Component {

  state = {

    userImage: '/assets/Images/Mohan-muruge.jpg',


    mainVideo: {

      commentsArr: []

    },

    sideVideo: []

  }

  componentDidMount() {

    Axios.get('https://project-2-api.herokuapp.com/videos?api_key=10b750d1-c831-4923-a2a8-be05839d83de')
      .then(response => {
        Axios.get('https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=10b750d1-c831-4923-a2a8-be05839d83de')
          .then(res => {
            console.log(response, res)


            let time = new Date(res.data.timestamp)
            res.data.timestamp = time.toLocaleDateString();

            // let asideTime = new Date(response.data.timestamp)
            // response.data.timestamp = asideTime.toLocaleDateString();

            let commentsTime = new Date(res.data.comments[0].timestamp)
            res.data.comments[0].timestamp = commentsTime.toLocaleDateString();
            console.log(commentsTime)

            let commentsTime2 = new Date(res.data.comments[1].timestamp)
            res.data.comments[1].timestamp = commentsTime2.toLocaleDateString();
            console.log(commentsTime2)

            let commentsTime3 = new Date(res.data.comments[2].timestamp)
            res.data.comments[2].timestamp = commentsTime3.toLocaleDateString();
            console.log(commentsTime3)

            let mainVideo = res.data
            mainVideo.commentsArr = res.data.comments

            const mainVideoIndex = response.data.findIndex(video =>
              video.id === mainVideo.id)

            if (mainVideoIndex > -1) {
              response.data.splice(mainVideoIndex, 1)
            }
            this.setState({
              mainVideo: mainVideo,
              sideVideo: response.data
            })
          })
      })
      .catch(error => {
        console.log(error)
      })
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps);
    if (this.props && prevProps && prevProps.match && prevProps.match.params.id !== this.props.match.params.id) {
      Axios.get(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}?api_key=10b750d1-c831-4923-a2a8-be05839d83de`)
        .then(response => {
          console.log(response);
          this.setState({
            ...this.state,
            mainVideo: {...response.data, commentsArr: response.data.comments},
          })
        })
    }
  }

  render() {

    return (

      <div className="app">
        <Header userImage={this.state.userImage} />
        <main className="app__main">
          <Hero mainVideo={this.state.mainVideo} />
          <Highlights mainVideo={this.state.mainVideo} />
          <Form userImage={this.state.userImage} />
          <div className="app__comments-container">
            <Comments mainVideo={this.state.mainVideo.commentsArr} />
          </div>
          <Aside sideVideo={this.state.sideVideo} />
        </main>
      </div>
    )
  }
}

export default Home;
