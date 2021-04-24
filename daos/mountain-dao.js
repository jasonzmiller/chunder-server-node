const mountainModel = require('../models/mountain-model');

const findAllMountains = () => mountainModel.find();
const findMountainById = (mid) => mountainModel.findById(mid);
const findMountainByName = (mountainName) => mountainModel.findOne({name: mountainName});

module.exports = { findAllMountains, findMountainById, findMountainByName }