const mongoose = require("mongoose");
const trail = require("./trail").schema;

const mountain = new mongoose.Schema({
    name: String,
    trails: {
        type: [trail],
        default: undefined
    },
    city: String,
    state: String
})

module.exports = mongoose.model("Mountain", mountain)