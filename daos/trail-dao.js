const trailModel = require('../models/trail/trail-model');

const findAllTrailsForMountain = (mid) => trailModel.find({mountainId: mid});
const findAllTrails = () => trailModel.find();
const findTrailById = (tid) => trailModel.findById(tid);

const updateTrail = (tid, updateToTrail) => trailModel.updateOne({_id: tid}, updateToTrail);

const deleteTrail = (tid) => trailModel.deleteOne({_id: tid});

module.exports = {
    findAllTrailsForMountain,
    findAllTrails,
    findTrailById,
    updateTrail,
    deleteTrail
}