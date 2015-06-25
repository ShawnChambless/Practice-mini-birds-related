var mongoose = require('mongoose');
var birdSchema = require('./Bird');
var userSchema = require('./User');

var sightingSchema = new mongoose.Schema({
    user: [userSchema],
    bird: [birdSchema],
    confirmed: { type: Boolean, default: false },
    numberSeen: { type: Number, min: 1 }
});


module.exports = mongoose.model('Sighting', sightingSchema);
