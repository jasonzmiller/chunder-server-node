const mountainModel = require('../models/mountain/mountain-model');

const findAllMountains = () => mountainModel.find();
const findMountainById = (mid) => mountainModel.findById(mid);
const findMountainByName = (mountainName) => mountainModel.findOne({name: mountainName});

const updateMountain = (mid, updateToMountain) => mountainModel.updateOne({_id: mid}, updateToMountain);
const deleteMountain = (mid) => mountainModel.deleteOne({_id: mid});

const addMountainToUser = (mid, uid) => mountainModel.update(
    {_id: uid},
    {
        $push: {"mountains": mid}
    }
)


module.exports = {
    findAllMountains,
    findMountainById,
    findMountainByName,
    updateMountain,
    deleteMountain,
    addMountainToUser
}