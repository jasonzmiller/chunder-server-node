const warningModel = require('../models/warning/warning-model');

const findWarningsForTrail = (tid) => warningModel.find({trailId: tid})
const findWarningById = (wid) => warningModel.findById(wid);
const findAllWarnings = () => warningModel.find()

const updateWarning = (wid, updateToWarning) => warningModel.updateOne({_id: wid}, updateToWarning);

const deleteWarning = (wid) => warningModel.deleteOne({_id: wid});

module.exports = {
    findWarningsForTrail,
    findWarningById,
    findAllWarnings,
    updateWarning,
    deleteWarning
} 