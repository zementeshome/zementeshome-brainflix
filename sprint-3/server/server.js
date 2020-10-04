const express = require('express')
const app = express();
const Video = require('./api/model/videos');
const VideoData = new Video();
const VideoUpload = require('./data.json');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
// const cors = require('cors');
// app.use(cors());

app.get('/', function(req, res) {
    res.send('Hello World!')
})

app.get ('/videos', async function(req, res) {
    const videos = await VideoData.getVideos()
    res.status(200).json(videos)

})

app.get ('/videos/:id', async function(req, res) {
    const videos = await VideoData.getVideoDetailsById(req.params['id'])
    console.log(videos, 'hey')
    res.status(200).json(videos)

})

app.post('/videos', (req, res) => {
    console.log(req.body)
    // VideoUpload.push(req.body) new line added 
    res.send(VideoUpload); 
    res.json({
       msg: 'data sent'
   })
})



app.listen(8022, () => console.log("running on port 8022"));

// app.use((req, resp, next) => {
//     resp.setHeader('Access-Control-Allow-Origin', '*');
//     next();
//     }); // middleware to set the response header