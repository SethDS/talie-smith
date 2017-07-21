var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config');
var controller = require('./controller');
var service = require('./service');

var app = express();

app.use(express.static(__dirname + '../front-end'));
app.use(bodyParser.json());

var port = config.PORT;

app.listen(port, function(){
    console.log('Listening...')
});