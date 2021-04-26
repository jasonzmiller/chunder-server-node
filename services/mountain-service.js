const mountainDao = require('../daos/mountain-dao')

const findAllMountains = () => mountainDao.findAllMountains()
const findMountainById = (mid) => mountainDao.findMountainById(mid);
const findMountainByName = (mountainName) => mountainDao.findMountainByName(mountainName);
const deleteMountain = (mid) => mountainDao.deleteMountain(mid);
const updateMountain = (mid) => mountainDao.updateMountain(mid);
const addMountainToUser = (mid, uid) => mountainDao.addMountainToUser(mid, uid);


module.exports = { findAllMountains, findMountainById, findMountainByName, updateMountain, deleteMountain, addMountainToUser }