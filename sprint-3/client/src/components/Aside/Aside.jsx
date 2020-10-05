import React from 'react';
import AsideCard from './../AsideCard/AsideCard';
import './Aside.scss';


 function Aside(props) {
        return (
            <aside className="app__aside-section">
            <section className="app__aside-videos">
            <div className="app__aside-div">
                 <span className="app__aside-line"></span>
                 <h3 className="app__aside-header">NEXT VIDEO</h3>
                    {props.sideVideo.filter((videoInfo) => videoInfo.id !== props.mainVideo.id).map((videoInfo) => <AsideCard key={videoInfo.id} content={videoInfo.title} channel={videoInfo.channel} image={videoInfo.image} commentId={videoInfo.id}/>)}
                    </div>
            </section>
            </aside>
        );
    }

    export default Aside;