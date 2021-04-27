const warningDao = require('../daos/warning-dao')

const findWarningsForTrail = (tid) => warningDao.findWarningsForTrail(tid)
const findWarningById = (wid) => warningDao.findWarningById(wid)
const findAllWarnings = () => warningDao.findAllWarnings()

const updateWarning = (wid, updateToWarning) => warningDao.updateWarning(wid, updateToWarning)

const deleteWarning = (wid) => warningDao.deleteWarning(wid)

module.exports = {
    findWarningsForTrail,
    findWarningById,
    findAllWarnings,
    deleteWarning,
    updateWarning
}