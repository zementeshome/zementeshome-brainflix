const fs = require('fs');
const path = './data.json';

class Video {
    readData = () => {
        // once we get the data we're resolving the promise with the data
        return new Promise((resolve, reject) => {
            fs.readFile(path, 'utf-8', (error, data) => { // used to read the data.json file
                resolve(JSON.parse(data)) // resolve and parse json string
        })    // console.log( JSON.parse(data))
      })
    }
    getVideoDetailsById = async (videoId) => {
       const data =  await this.readData() // wait for the data to load before 
    //    console.log(videoId, data)
      return data.videos.find((video => 
       video.id == videoId
       ))
    }
    // going through array and trying to find the video with the id the function is recieving

    getVideos = () => {
        return this.readData() // function for the /video route to get video data
    }
}

module.exports = Video;