var express = require('express');
var cors = require('cors');
require('dotenv').config()
let multer = require('multer');

var app = express();

app.use(cors());
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/api/fileanalyse', multer().single('upfile'), (req, res) => {
  console.log(req.file)
  let { mimetype, originalname, size } = req.file
  let responseObject = {}
  responseObject['size'] = size
  responseObject['name'] = originalname;
  responseObject['type'] = mimetype;
  res.json(responseObject)
})

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});