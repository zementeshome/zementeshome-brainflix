const express = require('express')
const app = express();
const Video = require('./api/model/videos');
const VideoData = new Video();
const VideoUpload = require('./data.json');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

// app.use((req, resp, next) => {
//     console.log('middleware added')
//     resp.setHeader('Access-Control-Allow-Origin', '*');
//     resp.setHeader('Access-Control-Allow-Methods', ['POST', 'GET', 'OPTIONS', 'PUT']);
//     next();
//     }); // middleware to set the response header

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
    // console.log(videos, 'hey')
    res.status(200).json(videos)

})

app.post('/videos', cors(corsOptions),(req, res) => {
    console.log(req.body)
    const videoData = {title:req.body.title, channel:req.body.channel, image: req.body.image};
    VideoData.addVideo(videoData);
    // VideoUpload.push(req.body) new line added 
    // res.send(VideoUpload); 
    res.json({
       msg: 'data sent'
   })
})



app.listen(8022, () => console.log("running on port 8022"));
