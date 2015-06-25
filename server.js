// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

// Controllers
var SightingCtrl = require('./controllers/SightingCtrl');
var UserCtrl = require('./controllers/UserCtrl');

// Express
var app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Endpoints
app.post('/sightings', SightingCtrl.create);
app.get('/sightings', SightingCtrl.read);
app.put('/sightings/:id', SightingCtrl.update);
app.delete('/sightings/:id', SightingCtrl.delete);

app.post('/user', UserCtrl.create);

// Connections
var port = 8081;
var mongoUri = 'mongodb://localhost:27017/mini-birds-mongoose';

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log('Connected to MongoDB at ', mongoUri);
});

app.listen(port, function() {
  console.log('Listening on port ', port);
});
