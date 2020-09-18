import React from 'react'; 
import CommentsCard from '../CommentsCard/CommentsCard';

function Comments(props) {

        return (
            <section className="app__comments">
                <div className="app__comments-displayed">
                {props.mainVideo.map((users) => {
                return <CommentsCard key={users.id} name={users.name} timestamp={users.timestamp} comment={users.comment} />
                   }
                )}
                </div>
            </section>
        )

}


    export default Comments
