const express = require('express')
const app = express();
const Video = require('./api/model/videos');
const VideoData = new Video();
// const routes = require('./routes';

app.use((req, resp, next) => {
    resp.setHeader('Access-Control-Allow-Origin', '*');
    next();
    }); // middleware to set the response header

app.get('/', function(req, res) {
    res.send('Hello World!')
})

app.get ('/videos', async function(req, res) {
    // VideoData.getVideoDetailsById()
    const videos = await VideoData.getVideos()
    res.status(200).json(videos)

})

app.get ('/videos/:id', async function(req, res) {
    const videos = await VideoData.getVideoDetailsById(req.params['id'])
    console.log(videos, 'hey')
    res.status(200).json(videos)
    // console.log(req.params)
    // const videos = await VideoData.getVideos()
    // res.status(200).json(videos)

})

app.listen(8022, () => console.log("running on port 8022"));