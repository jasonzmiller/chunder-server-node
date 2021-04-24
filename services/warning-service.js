const warningDao = require('../daos/warning-dao')

const findWarningsForTrail = (tid) => warningDao.findWarningsForTrail(tid)
const findWarningById = (wid) => warningDao.findWarningById(wid)
const deleteWarning = (wid) => warningDao.deleteWarning(wid)
const updateWarning = (wid) => warningDao.updateWarning(wid)

module.exports = {
    findWarningsForTrail,
    findWarningById,
    deleteWarning,
    updateWarning
}