import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Highlights from './components/Highlights/Highlights';
import Comments from './components/Comments/Comments';
import Form from './components/Form/Form';
import Aside from './components/Aside/Aside';
// import AsideCard from './components/AsideCard/AsideCard';
// import CommentsCard from './components/CommentsCard/CommentsCard';
// import HeroCard from './components/HeroCard/HeroCard';
// import HighlightsCard from './components/Highlights/Highlights';

class App extends React.Component {

  state = {

    userImage: '/assets/Images/Mohan-muruge.jpg',


    mainVideo: {

          title: 'BMX Rampage: 2018 Highlights', channel:'By Red Cow', timestamp: '12/18/2018', views: '1,001,023', likes: '110,985', duration: '0:00/0:42',  poster: '/assets/Images/video-list-0.jpg', description:'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title', id: 1, video: '', 
        
        commentsArr: [
          {
              name: 'Michael Lyons',
              id: 1,
              timestamp: '12/18/2018',
              comment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
          },

          {
              name: 'Gary Wong',
              id: 2,
              timestamp: '12/12/2018',
              comment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
          },

          {
              name: 'Theodore Duncan',
              id: 3,
              timestamp: '11/15/2018',
              comment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
          },
      ]
  },

  sideVideo: [

        {id: 1, title: 'Become A Travel Pro In One Easy Lesson...', channel: 'Scotty Cranmer', image:'/assets/Images/video-list-1.jpg' },
        {id: 2, title: 'Les Houches The Hidden Gem Of The...', channel: 'Scotty Cranmer', image:'/assets/Images/video-list-2.jpg' },
        {id: 3, title: 'Travel Health Useful Medical Information...', channel: 'Scotty Cranmer', image:'/assets/Images/video-list-3.jpg' },
        {id: 4, title: 'Cheap Airline Tickets Great Ways To Save', channel: 'Emily Harper', image:'/assets/Images/video-list-4.jpg' },
        {id: 5, title: 'Take A Romantic Break In A Boutique Hotel', channel: 'Ethan Owen', image:'/assets/Images/video-list-5.jpg' },
        {id: 6, title: 'Choose The Perfect Accommodations', channel: 'Lydia Perez', image:'/assets/Images/video-list-6.jpg' },
        {id: 7, title: 'Cruising Destination Ideas', channel: 'Timothy Austin', image:'/assets/Images/video-list-7.jpg' },
        {id: 8, title: 'Train Travel On Track For Safety', channel: 'Scotty Cranmer', image:'/assets/Images/video-list-8.jpg' },
      ]
    }    

render() { 
  return (
    <div className="app">
      <Header userImage={this.state.userImage} />
      <main className="app__main">
        <Hero mainVideo={this.state.mainVideo}/>
        {/* <HeroCard mainVideo={mainVideo}/> */}
         <Highlights mainVideo={this.state.mainVideo} />
         {/* <HighlightsCard mainVideo={mainVideo}/> */}
         <Form userImage={this.state.userImage} />
         <div className="app__comments-container">
          <Comments mainVideo={this.state.mainVideo.commentsArr}/>
         </div>
         <Aside sideVideo={this.state.sideVideo}/>
      </main>
    </div>
  );
}  
}

export default App;