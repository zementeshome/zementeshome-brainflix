import React from 'react'; 

function Comments(props) {

        return (
            <section className="app__comments">
                <div className="app__comments-displayed">
                    {props.commentsArr.map((user, index) => (
                        <div key={index}>
                        <h3 className="app__comments-username">{user.name}</h3>
                        <p className="app__comments-timestamp">{user.timestamp}</p>
                        <p className="app__comments-comment">{user.comment}</p>
                        </div>
                    )
                    )}
                </div>
            </section>
        )

}



    export default Comments