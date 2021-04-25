const mongoose = require('mongoose');

const trailSchema = new mongoose.Schema({
    mountainId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mountain'
    },
    trailName: String,
    section: String,
    trailRating: String,
    trailStatus: String,
    warnings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Warning'
    }],
}, {collection: 'trails'})

module.exports = trailSchema