const trailDao = require('../daos/trail-dao')

const findAllTrailsForMountain = (mid) => trailDao.findAllTrailsForMountain(mid);
const findAllTrails = () => trailDao.findAllTrails();
const findTrailById = (tid) => trailDao.findTrailById(tid);
const deleteTrail = (tid) => trailDao.deleteTrail(tid);
const updateTrail = (tid) => trailDao.updateTrail(tid);

module.exports = {
    findAllTrailsForMountain,
    findAllTrails,
    findTrailById,
    deleteTrail,
    updateTrail
}