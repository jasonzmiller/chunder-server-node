const mongoose = require('mongoose')
const mountainSchema = require('./mountain-schema')

const mountainModel = mongoose.model(
    'MountainModel',
    mountainSchema
)

module.exports = mountainModel