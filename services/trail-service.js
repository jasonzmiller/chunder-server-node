const trailDao = require('../daos/trail-dao')

const findAllTrailsForMountain = (mid) => trailDao.findAllTrailsForMountain(mid);
const findAllTrails = () => trailDao.findAllTrails();
const findTrailById = (tid) => trailDao.findTrailById(tid);

const updateTrail = (tid, updateToTrail) => trailDao.updateTrail(tid, updateToTrail);

const deleteTrail = (tid) => trailDao.deleteTrail(tid);

module.exports = {
    findAllTrailsForMountain,
    findAllTrails,
    findTrailById,
    updateTrail,
    deleteTrail
}