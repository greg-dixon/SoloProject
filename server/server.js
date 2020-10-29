const express = require('express');
const cookieParser = require('cookieParser')
const app = express();
const path = require('path');
const cookieController = require('../controllers/cookieController')
const dbController = require('../controllers/dbController');

app.use(cookieParser())

app.get('/getWord', dbController.generateWord, (req, res, next) => {
res.status(200).send(res.locals)
})

app.post('/submit', dbController.submitWord, (req, res, next) => {
res.status(200).send("Successful submission")
})

app.use('/', (req, res, next) => {
res.status(404).send("That page does not exist")
})

// if (process.env.NODE_ENV === 'production') {
//   // statically serve everything in the build folder on the route '/build'
//   // serve index.html on the route '/'
//   app.use('/', (req, res) => {
//  express.static(path.join(__dirname, '../build'))
//     // res.sendFile(path.join(__dirname, '../index.html'));
//   });
// }

app.listen(3000, () => {console.log("Server listening on port 3000")}); // listens on port 3000 -> http://localhost:3000/
