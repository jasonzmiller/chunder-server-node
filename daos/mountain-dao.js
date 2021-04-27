const mountainModel = require('../models/mountain-model');
const userModel = require('../models/user-model');



const findAllMountains = () => mountainModel.find();
const findMountainById = (mid) => mountainModel.findById(mid);
const findMountainByName = (mountainName) => mountainModel.findOne({name: mountainName});
const updateMountain = (mid) => mountainModel.updateOne({_id: mid});
const deleteMountain = (mid) => mountainModel.deleteOne({_id: mid});

const addMountainToUser = (mid, uid) => {
    console.log('This reached the DAO');
    console.log(mid);
    console.log(uid);

    userModel.findByIdAndUpdate(
        uid,
        {$push: {"mountains": mid}},
        {safe: true, upsert: true, new: true},
        function(err, model){
            console.log(err);
        }
        
    )

}



module.exports = { findAllMountains, findMountainById, findMountainByName, updateMountain, deleteMountain, addMountainToUser }