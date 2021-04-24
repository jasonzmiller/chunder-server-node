const mongoose = require('mongoose')

const warningSchema = new mongoose.Schema({
    name: String,
    votes: Number,
    trailId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trail'
    }
}, {collection: 'warnings'});

module.exports = warningSchema