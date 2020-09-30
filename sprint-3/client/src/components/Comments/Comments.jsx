import React from 'react'; 
import CommentsCard from '../CommentsCard/CommentsCard';
import './Comments.scss';

function Comments(props) {
        return (
            <section className="app__comments">
                <div className="app__comments-displayed">
                    {props.mainVideo.map((users) => {
                    return <CommentsCard key={users.id} name={users.name} timestamp={users.timestamp} comment={users.comment} commentId={users.id} likes={users.likes}/>
                   }
                )}
                </div>
                    <span className="app__comments-desktopline"></span>
            </section>
        )
    }

export default Comments
