const mongoose = require('mongoose');
const trailSchema = require('./trail-schema')

const trailModel = mongoose.model(
    'TrailModel',
    trailSchema
)

module.exports = trailModel;