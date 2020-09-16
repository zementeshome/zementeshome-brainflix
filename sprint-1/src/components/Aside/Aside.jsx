import React from 'react';
import AsideCard from './../AsideCard/AsideCard';


class Aside extends React.Component {
    state = {
        
            sideVideo: [
                {id: 1, title: 'Become A Travel Pro In One Easy Lesson...', channel: 'Scotty Cranmer', image:'/AsideImages/video-list-1.jpg' },
                {id: 2, title: 'Les Houches The Hidden Gem Of The...', channel: 'Scotty Cranmer', image:'/AsideImages/video-list-2.jpg' },
                {id: 3, title: 'Travel Health Useful Medical Information...', channel: 'Scotty Cranmer', image:'/AsideImages/video-list-3.jpg' },
                {id: 4, title: 'Cheap Airline Tickets Great Ways To Save', channel: 'Emily Harper', image:'/AsideImages/video-list-4.jpg' },
                {id: 5, title: 'Take A Romantic Break In A Boutique Hotel', channel: 'Ethan Owen', image:'/AsideImages/video-list-5.jpg' },
                {id: 6, title: 'Choose The Perfect Accommodations', channel: 'Lydia Perez', image:'/AsideImages/video-list-6.jpg' },
                {id: 7, title: 'Cruising Destination Ideas', channel: 'Timothy Austin', image:'/AsideImages/video-list-7.jpg' },
                {id: 8, title: 'Train Travel On Track For Safety', channel: 'Scotty Cranmer', image:'/AsideImages/video-list-8.jpg' },
            ]
        }
     
    render() {

    // create card component, import top 
        return (
            <section className="app__aside-videos">
                <h3 className="app__aside-header">NEXT VIDEO</h3>
                <div className="app__aside-container">
                    {this.state.sideVideo.map((videoInfo) => <AsideCard key={videoInfo.id} content={videoInfo.title} channel={videoInfo.channel} image={videoInfo.image}/>)}
                </div>
            </section>
        );
    }
}
    export default Aside;