const mongoose = require('mongoose');

const trailSchema = new mongoose.Schema({
    resort: String,
    section: String,
    trailName: String,
    trailRating: String,
    trailStatus: Boolean,
    mountain: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mountain'
    },
    warnings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Warning'
    }],
}, {collection: 'trails'})

module.exports = trailSchema