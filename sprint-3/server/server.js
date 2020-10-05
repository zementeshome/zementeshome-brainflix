const express = require('express')
const app = express();
const Video = require('./api/model/videos');
const VideoData = new Video();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.get('/', function(req, res) {
    res.send('Hello World!')
})

app.get ('/videos', async function(req, res) {
    const videos = await VideoData.getVideos()
    res.status(200).json(videos)

})

app.get ('/videos/:id', async function(req, res) {
    const videos = await VideoData.getVideoDetailsById(req.params['id'])
    res.status(200).json(videos)

})

app.post('/videos', cors(corsOptions),(req, res) => {
    const videoData = {id:req.body.id, title:req.body.title, channel:req.body.channel, image:req.body.image};
    VideoData.addVideo(videoData);
    res.json({
        msg: 'data sent'
     })
})



app.listen(8022, () => console.log("running on port 8022"));
