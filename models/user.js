const mongoose = require("mongoose");
const mountain = require("./mountain").schema;

const user = new mongoose.Schema({
    username: String,
    password: String,
    mountains: {
        type: [mountain],
        default: undefined
    }
    //Mountains/Favorited Trails
    //Type: Ski Patrol/User
});

module.exports = mongoose.model("User", user);