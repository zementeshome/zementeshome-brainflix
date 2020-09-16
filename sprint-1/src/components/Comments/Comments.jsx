import React from 'react';
import userImage from './../../assets/Images/Mohan-muruge.jpg';

function Comments() {

    let users = [
            {
                name: 'Michael Lyons',
                timestamp: '12/18/2018',
                comment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
            },

            {
                name: 'Gary Wong',
                timestamp: '12/12/2018',
                comment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
            },

            {
                name: 'Theodore Duncan',
                timestamp: '11/15/2018',
                comment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
            },

    ]
        return (
            <section className="app__comments">
                <h2 className="app__comments-header">3 Comments</h2>
                <div className="app__comments-section">
                    <img className="app__comments-photo" src={userImage} alt="user image"/>
                    <form className="app__comments-form" action='#'>
                        <label className="app__comments-join" for="join">JOIN THE CONVERSATION</label><br />
                        <textarea name="comment" className="app__comments-input" placeholder="Write a comment here"></textarea><br />
                        <input type="submit" value="COMMENT" className="app__comments-submit"></input>
                    </form>
                </div>
                <div className="app__comments-displayed">
                    {users.map((user, index) => (
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