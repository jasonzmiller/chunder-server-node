const mountainModel = require('../models/mountain-model');

const findAllMountains = () => mountainModel.find();
const findMountainById = (mid) => mountainModel.findById(mid);
const findMountainByName = (mountainName) => mountainModel.findOne({name: mountainName});
const updateMountain = (mid) => mountainModel.updateOne({id: mid});
const deleteMountain = (mid) => mountainModel.deleteOne({id: mid});
module.exports = { findAllMountains, findMountainById, findMountainByName, updateMountain, deleteMountain }