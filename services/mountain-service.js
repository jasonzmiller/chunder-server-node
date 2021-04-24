const mountainDao = require('../daos/mountain-dao')

const findAllMountains = () => mountainDao.findAllMountains()
const findMountainById = (mid) => mountainDao.findMountainById(mid);
const findMountainByName = (mountainName) = mountainDao.findMountainByName(mountainName);

module.exports = { findAllMountains, findMountainById, findMountainByName }