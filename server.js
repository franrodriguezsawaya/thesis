
//express to run server
var express = require('express');

//start up an instance of app. This needs to go before any of the things below which are attached to the app
var app = express();
//connecting app to website folder which has index.html and sketch.js to run a website connected to this server/app
// app.use(express.static('velocityBlast_alphabet'));
app.use(express.static('test_p5'));

//cors for cross origin aloowance
var cors = require('cors');
app.use(cors());

//requring the node file read in system
var fs = require('fs')

//body-parser to work with json files
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies



// Set up the server
var server = app.listen(process.env.PORT || 3000, listen);
// var server = app.listen(process.env.PORT || 3030, listen);

//callback to debug
function listen(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://' + host + ':' + port);
      if (process.send) {
        process.send('online');
    }
}
