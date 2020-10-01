const express = require('express')
const app = express()
// const routes = require('./routes')

// const port = process.env.PORT || process.argv[2] || 8022

// app.listen(port, () => console.log(`Listening on ${port}`))

// app.get('/', function(req, res) {
//     res.send('Hello World!')
// })
// app.use('/', routes)
// app.use('/videos/:id', routes)
// app.use('/videoupload', routes)

app.listen(8022, () => console.log("running on port 8022"));