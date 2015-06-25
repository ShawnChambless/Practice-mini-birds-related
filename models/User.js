var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email: { type: String, required: true, maxlength: 40 },
    username: { type: String, required: true, minlength: 3, maxlength: 40 },
    level: { type: Number, default: 1 },
    location: { type: String, required: true },
    member: { type: Boolean, required: true },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('userSchema', userSchema);
