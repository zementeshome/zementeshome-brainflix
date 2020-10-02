const fs = require('fs');
const path = './data.json';

class Video {
    readData = () => {
        // once we get the data we're resolving the promise with the data
        return new Promise((resolve, reject) => {
            fs.readFile(path, 'utf-8', (error, data) => {
                resolve(JSON.parse(data))
        })    // console.log( JSON.parse(data))
      })
    }
    getVideoDetailsById = async (videoId) => {
       const data =  await this.readData()
    //    console.log(videoId, data)
      return data.videos.find((video => 
       video.id == videoId
       ))
    }
    // going through array and trying to find the video with the id the function is recieving

    getVideos = () => {
        return this.readData()
    }
}

module.exports = Video;