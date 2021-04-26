const trailModel = require('../models/trail-model');

const findAllTrailsForMountain = (mid) => trailModel.find({mountainId: mid});
const findAllTrails = () => trailModel.find();
const findTrailById = (tid) => trailModel.findById(tid);
const updateTrail = (tid) => trailModel.updateOne({_id: tid});
const deleteTrail = (tid) => trailModel.deleteOne({_id: tid});

module.exports = { findTrailById, updateTrail, deleteTrail, findAllTrailsForMountain, findAllTrails }