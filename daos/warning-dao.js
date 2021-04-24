const warningModel = require('../models/warning-model');

const findWarningsForTrail = (tid) => warningModel.find({trailId: tid})
const findWarningById = (wid) => warningModel.findById(wid);
const updateWarning = (wid) => warningModel.updateOne({_id: wid})
const deleteWarning = (wid) => warningModel.deleteOne({_id: wid});

module.exports = { findWarningById, updateWarning, deleteWarning, findWarningsForTrail } 