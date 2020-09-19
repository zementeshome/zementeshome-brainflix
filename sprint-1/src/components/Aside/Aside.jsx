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
    export default Aside;