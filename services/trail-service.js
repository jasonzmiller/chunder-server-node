const trailDao = require('../daos/trail-dao')

const findAllTrailsForMountain = (mid) => trailDao.findAllTrailsForMountain(mid)
const findTrailById = (tid) => trailDao.findTrailById(tid);
const deleteTrail = (tid) => trailDao.deleteTrail(tid);
const updateTrail = (tid) => trailDao.updateTrail(tid);

module.exports = {
    findAllTrailsForMountain,
    findTrailById,
    deleteTrail,
    updateTrail
}