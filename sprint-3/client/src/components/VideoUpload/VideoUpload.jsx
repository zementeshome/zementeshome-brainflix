import React from 'react';
import Header from '../Header/Header';
import './VideoUpload.scss';
import axios from 'axios';
import uuidv4 from 'uuid/v4';

class VideoUpload extends React.Component {

    state = {
        title: '',
        channel: ''
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        })
    }

    submit = (event) => {
        event.preventDefault();
        let id = uuidv4()
        const payload = {
            id: id,
            title: this.state.title,
            channel: this.state.channel,
            image: process.env.PUBLIC_URL + '/assets/Images/Upload-video-preview.jpg'
        }
        axios({
            url: 'http://localhost:8022/videos',
            method: 'POST',
            data: payload,
        })
          .then(() => {
            this.setState({
            title: '',
            channel: ''
            })
        })
          .catch((error) => {
            console.log(error)
        })
    };

    render() {
        let userImage = '/assets/Images/Mohan-muruge.jpg'
        return (
            <section className="app__upload">
                <Header userImage={process.env.PUBLIC_URL + userImage} />
                <span className="app__upload-bar"></span>
                <h3 className="app__upload-header">Upload Video</h3>
                <span className="app__upload-line"></span>
                <p className="app__upload-video">VIDEO THUMBNAIL</p>
                <img className="app__upload-thumbnail" src={process.env.PUBLIC_URL + '/assets/Images/Upload-video-preview.jpg'} alt="man riding a bike"></img>
                <form className="app__upload-form">
                    <div className="app__upload-container">
                        <label className="app__upload-title" htmlFor="title">TITLE YOUR VIDEO</label><br />
                        <textarea name="title" className="app__upload-titleinput" placeholder="Add a title to your video" style={{ fontFamily: 'Avenir', fontSize: '14px' }} value={this.state.title} onChange={this.handleChange}></textarea><br />
                        <label className="app__upload-description" htmlFor="description">ADD A VIDEO DESCRIPTION</label><br />
                        <textarea name="channel" className="app__upload-descriptioninput" placeholder="Add a description of your video" style={{ fontFamily: 'Avenir', fontSize: '14px' }} value={this.state.channel} onChange={this.handleChange}></textarea><br />
                    </div>
                    <span className="app__upload-line"></span>
                    <div className="app__upload-button">
                        <button onClick={this.submit} className="app__upload-publish">PUBLISH</button>
                        <button className="app__upload-cancel">CANCEL</button>
                    </div>
                </form>
            </section>
        )
    }
}

export default VideoUpload;