import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Highlights from './components/Highlights/Highlights';
import Form from './components/Form/Form';
import Comments from './components/Comments/Comments';
import Aside from './components/Aside/Aside';
import Axios from 'axios';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import VideoUpload from './components/VideoUpload/VideoUpload';
  

class App extends React.Component {

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
          // console.log(response, res)
          let mainVideo = res.data
          mainVideo.commentsArr = res.data.comments

          const mainVideoIndex =  response.data.findIndex (video => 
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
    }

render() { 

  return (
    <Router>
    <Switch>
      <Route exact path="/">
    <div className="app">
      <Header userImage={this.state.userImage} />
      <main className="app__main">
        <Hero mainVideo={this.state.mainVideo}/>
         <Highlights mainVideo={this.state.mainVideo} />
         <Form userImage={this.state.userImage} />
         <div className="app__comments-container">
          <Comments mainVideo={this.state.mainVideo.commentsArr}/>
         </div>
         <Aside sideVideo={this.state.sideVideo}/>
      </main>
    </div>
    </Route>
    <Route path="/videoupload">
      <VideoUpload />
    </Route>
    {/* <Route path="videodetails:id">
      <VideoUpload />
    </Route> */}
    </Switch>
    </Router>
  );
}  
}


export default App;