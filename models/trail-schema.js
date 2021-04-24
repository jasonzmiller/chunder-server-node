const mongoose = require('mongoose');

const trailSchema = new mongoose.Schema({
    _id: String,
    resort: String,
    section: String,
    trailName: String,
    trailRating: String,
    trailStatus: Boolean,
    warnings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Warning'
    }],
}, {collection: 'trails'})

module.exports = trailSchema