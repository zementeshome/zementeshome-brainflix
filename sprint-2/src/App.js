import React from 'react';
// import Axios from 'axios';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
// import Header from './components/Header/Header';
// import Hero from './components/Hero/Hero';
// import Highlights from './components/Highlights/Highlights';
// import Form from './components/Form/Form';
// import Comments from './components/Comments/Comments';
// import Aside from './components/Aside/Aside';
import VideoUpload from './components/VideoUpload/VideoUpload';
// import VideoDetails from './components/VideoDetails/VideoDetails';
import Home from './components/Home/Home';
  

class App extends React.Component {

  // state = {

  //   userImage: '/assets/Images/Mohan-muruge.jpg',


  //   mainVideo: {
        
  //       commentsArr: []

  //   },

  //       sideVideo: []

  //   }    

  //   componentDidMount() {

  //     Axios.get('https://project-2-api.herokuapp.com/videos?api_key=10b750d1-c831-4923-a2a8-be05839d83de')
  //     .then(response => {
  //       Axios.get('https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=10b750d1-c831-4923-a2a8-be05839d83de')
  //       .then(res => {
  //         console.log(response, res)

          
  //         let time = new Date(res.data.timestamp)
  //         res.data.timestamp = time.toLocaleDateString();

  //         let commentsTime = new Date(res.data.comments[0].timestamp)
  //         res.data.comments[0].timestamp= commentsTime.toLocaleDateString();
  //         console.log(commentsTime)

  //         let commentsTime2 = new Date(res.data.comments[1].timestamp)
  //         res.data.comments[1].timestamp= commentsTime2.toLocaleDateString();
  //         console.log(commentsTime2)

  //         let commentsTime3 = new Date(res.data.comments[2].timestamp)
  //         res.data.comments[2].timestamp= commentsTime3.toLocaleDateString();
  //         console.log(commentsTime3)

  //         let mainVideo = res.data
  //         mainVideo.commentsArr = res.data.comments

  //         const mainVideoIndex =  response.data.findIndex (video => 
  //           video.id === mainVideo.id)

  //         if (mainVideoIndex > -1) {
  //           response.data.splice(mainVideoIndex, 1)
  //         }
  //         this.setState({
  //           mainVideo: mainVideo,
  //           sideVideo: response.data
  //         })
  //       })
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  //   }
    
  //  getDate = () => {
  //   //   let time = document.querySelector('.app__comments-timestamp')
  //   //   time.firstChild.nodeValue = new Date().toLocaleDateString(undefined, {
  //   //     month : '2-digit',  
  //   //     day : '2-digit',
  //   //     year : 'numeric'
  //   //   })
  //   // } 

render() { 

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/videoupload" render={routeProps => <VideoUpload {...routeProps} /> } >
          </Route>
         <Route path="/:id" component={Home}>
          {/* <div className="app"> */}
            {/* <Header userImage={this.state.userImage} />
            <main className="app__main">
              <Hero mainVideo={this.state.mainVideo}/>
              <Highlights mainVideo={this.state.mainVideo} />
              <Form userImage={this.state.userImage} />
              <div className="app__comments-container">
                <Comments mainVideo={this.state.mainVideo.commentsArr}/>
              </div>
              <Aside sideVideo={this.state.sideVideo}/>
            </main>
          </div> */}
          </Route>
    </Switch>
  </Router>
  );
}  
}


export default App;