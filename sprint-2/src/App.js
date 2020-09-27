import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import VideoUpload from './components/VideoUpload/VideoUpload';
import Home from './components/Home/Home';
  

class App extends React.Component {

render() { 

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/videoupload" render={routeProps => <VideoUpload {...routeProps} /> } >
          </Route>
         <Route path="/:id" component={Home}></Route>
    </Switch>
  </Router>
  );
 }  
}


export default App;