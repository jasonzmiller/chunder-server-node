const mongoose = require('mongoose');

const mountainSchema = mongoose.Schema({
    _id: String,
    name: String,
    trails: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trail'
    }],
    city: String,
    state: String
}, {collection: 'mountains'})

module.exports = mountainSchema