const fs = require('fs');
const path = './data.json';

class Video {
    readData = () => {
        return new Promise((resolve, reject) => {
            fs.readFile(path, 'utf-8', (error, data) => {
                resolve(JSON.parse(data))
            })
        })
    }
    
    getVideoDetailsById = async (videoId) => {
        const data = await this.readData()
        return data.videos.find((video =>
            video.id == videoId
        ))
    }

    getVideos = () => {
        return this.readData()
    }

    addVideo = async (videoData) => {
        let vidData = await this.readData()
        if (!vidData.videos) {
            vidData.videos = []
        }
        if (!videoData.sideVideo) {
            videoData.sideVideo = []
        }
        vidData.sideVideo.push({id: videoData.id, title: videoData.title, channel: videoData.channel, image: videoData.image});

        vidData.videos.push({id: videoData.id, title: videoData.title, channel: videoData.channel, image: videoData.image});
        this.writeData(vidData);
    }

    writeData = (data) => {
        fs.writeFileSync(path, JSON.stringify(data))
    }
}

module.exports = Video;