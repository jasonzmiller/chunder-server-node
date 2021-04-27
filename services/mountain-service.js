const mountainDao = require('../daos/mountain-dao')

const findAllMountains = () => mountainDao.findAllMountains()
const findMountainById = (mid) => mountainDao.findMountainById(mid);
const findMountainByName = (mountainName) => mountainDao.findMountainByName(mountainName);

const updateMountain = (mid, updateToMountain) => mountainDao.updateMountain(mid, updateToMountain);
const addMountainToUser = (mid, uid) => mountainDao.addMountainToUser(mid, uid);

const deleteMountain = (mid) => mountainDao.deleteMountain(mid);


module.exports = {
    findAllMountains,
    findMountainById,
    findMountainByName,
    updateMountain,
    addMountainToUser,
    deleteMountain
}