import React from 'react';
import AsideCard from './../AsideCard/AsideCard';


 function Aside(props) {
        return (
            <section className="app__aside-videos">
                <h3 className="app__aside-header">NEXT VIDEO</h3>
                <div className="app__aside-container">
                    {props.sideVideo.map((videoInfo) => <AsideCard key={videoInfo.id} content={videoInfo.title} channel={videoInfo.channel} image={videoInfo.image}/>)}
                </div>
            </section>
        );
    }
    export default Aside;