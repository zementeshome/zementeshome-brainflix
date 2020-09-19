import React from 'react';
import AsideCard from './../AsideCard/AsideCard';
import './Aside.scss';


 function Aside(props) {
        return (
            <section className="app__aside-videos">
                 <span className="app__aside-line"></span>
                <h3 className="app__aside-header">NEXT VIDEO</h3>
                    {props.sideVideo.map((videoInfo) => <AsideCard key={videoInfo.id} content={videoInfo.title} channel={videoInfo.channel} image={videoInfo.image}/>)}
            </section>
        );
    }
// componentDidMount() 

// let channel = this.props.channel;

// this.changeName = () => {
//     const match = window.matchMedia(`(min-width: 768px)`)
//     if (match) {
//         channel.sideVideo.id[1].textContent = 'Bernice Lambert';
//         channel.sideVideo.id[2].textContent = 'Bernard Patrick';
//         channel.sideVideo.id[3].textContent = 'Lizzie Burton';
//     }
// };

// this.changeName()
// window.addEventListener('change', this.changeName);


    export default Aside;