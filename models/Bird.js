var mongoose = require('mongoose');

var birdSchema = new mongoose.Schema({
    name: { type: String, required: true, lowercase: true },
    order: { type: String, maxlength: 20, required: true, lowercase: true },
    status: { type: String, lowercase: true, enum:[
        'extinct',
        'extinct in the wild',
        'critically endangered',
        'endangered',
        'vulnerable',
        'near threatened',
        'conservation dependent',
        'least concern'
        ]
    }
});

module.exports = birdSchema;
