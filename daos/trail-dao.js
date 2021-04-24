const trailModel = require('../models/trail-model');

const findAllTrailsForMountain = (mid) => trailModel.find({mountainId: mid});
const findTrailById = (tid) => trailModel.findById(tid);
const updateTrail = (tid) => trailModel.updateOne({id: tid});
const deleteTrail = (tid) => trailModel.deleteOne({id: tid});

module.exports = { findTrailById, updateTrail, deleteTrail, findAllTrailsForMountain }