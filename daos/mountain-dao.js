const mountainModel = require('../models/mountain-model');

const findAllMountains = () => mountainModel.find();
const findMountainById = (mid) => mountainModel.findById(mid);
const findMountainByName = (mountainName) => mountainModel.findOne({name: mountainName});
const updateMountain = (mid) => mountainModel.updateOne({_id: mid});
const deleteMountain = (mid) => mountainModel.deleteOne({_id: mid});
module.exports = { findAllMountains, findMountainById, findMountainByName, updateMountain, deleteMountain }