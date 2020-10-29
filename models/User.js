const mongoose = require('mongoose');

// Defineing Schema
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userID: Number
})

module.exports = mongoose.model('Users', UserSchema);