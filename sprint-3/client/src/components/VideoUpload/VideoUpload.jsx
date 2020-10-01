import React from 'react';
import Header from '../Header/Header';
import './VideoUpload.scss';
    
class VideoUpload extends React.Component {
    render() {
      let userImage = '/assets/Images/Mohan-muruge.jpg'
        return (
            <section className="app__upload">
                <Header userImage={process.env.PUBLIC_URL + userImage}/>
                    <span className="app__upload-bar"></span>
                        <h3 className="app__upload-header">Upload Video</h3>
                        <span className="app__upload-line"></span>
                        <p className="app__upload-video">VIDEO THUMBNAIL</p>
                         <img className="app__upload-thumbnail" src={process.env.PUBLIC_URL + '/assets/Images/Upload-video-preview.jpg'} alt="man riding a bike"></img>
            <form className="app__upload-form">
                <div className="app__upload-container">
                    <label className="app__upload-title" htmlFor="title">TITLE YOUR VIDEO</label><br />
                    <textarea name="title" className="app__upload-titleinput" placeholder="Add a title to your video"></textarea><br />
                    <label className="app__upload-description" htmlFor="description">ADD A VIDEO DESCRIPTION</label><br />
                    <textarea name="description" className="app__upload-descriptioninput" placeholder="Add a description of your video"></textarea><br />
                </div>
                    <span className="app__upload-line"></span>
                <div className="app__upload-button">
                    <button className="app__upload-publish">PUBLISH</button>
                <   button className="app__upload-cancel">CANCEL</button>
                </div>
            </form>
        </section>
        )
      }
    }

export default VideoUpload;