const mongoose = require('mongoose');

const mountainSchema = mongoose.Schema({
    name: String,
    trails: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trail'
    }],
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    city: String,
    state: String
}, {collection: 'mountains'})

module.exports = mountainSchema