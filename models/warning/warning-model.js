const mongoose = require("mongoose");
const warningSchema = require('./warning-schema')

const warningModel = mongoose.model(
    'WarningModel',
    warningSchema
)

module.exports = warningModel