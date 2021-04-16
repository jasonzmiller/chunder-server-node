const mongoose = require("mongoose");
const trail = new mongoose.Schema({
    resort: String,
    section: String,
    trailName: String,
    trailRating: String,
    trailStatus: Boolean
})

module.exports = mongoose.model("Trail", trail);