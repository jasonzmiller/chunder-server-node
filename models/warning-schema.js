const mongoose = require('mongoose')

const warningSchema = new mongoose.Schema({
    _id: String,
    name: String,
    votes: Number,
    trail: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trail'
    }]
}, {collection: 'warnings'});

module.exports = warningSchema