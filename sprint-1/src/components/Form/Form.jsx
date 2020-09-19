import React from 'react';
import './Form.scss'



function Form(props) {
    return (
        <section className="app__form">
                <h2 className="app__form-header">3 Comments</h2>
                <div className="app__form-section">
                    <img className="app__form-photo" src={process.env.PUBLIC_URL + props.userImage} alt="user icon"/>
                    <div className="app__form-container">
                    <form className="app__form-comments" action='#'>
                        <label className="app__form-join" htmlFor="join">JOIN THE CONVERSATION</label><br />
                        <textarea name="comment" className="app__form-input" placeholder="Write a comment here"></textarea><br />
                        <input type="submit" value="COMMENT" className="app__form-submit"></input>
                    </form>
                    </div>
                </div>
                </section>
    )
}

export default Form