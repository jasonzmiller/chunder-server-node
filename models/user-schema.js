const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: String,
    username: String,
    password: String,
    mountains: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mountain'
    }],
    isAdmin: Boolean,
}, {collection: 'users'});

module.exports = userSchema