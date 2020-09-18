import React from 'react';
import './Form.scss'



function Form(props) {
    return (
        <section className="app__comments">
                <h2 className="app__comments-header">3 Comments</h2>
                <div className="app__comments-section">
                    <img className="app__comments-photo" src={process.env.PUBLIC_URL + props.userImage} alt="user icon"/>
                    <form className="app__comments-form" action='#'>
                        <label className="app__comments-join" htmlFor="join">JOIN THE CONVERSATION</label><br />
                        <textarea name="comment" className="app__comments-input" placeholder="Write a comment here"></textarea><br />
                        <input type="submit" value="COMMENT" className="app__comments-submit"></input>
                    </form>
                </div>
                </section>
    )
}

export default Form