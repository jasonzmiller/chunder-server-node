const mountainModel = require('../models/mountain-model')
const mountainService = require('../services/mountain-service')

module.exports = (app) => {
    //Find All Mountains
    app.get('/mountains', (req, res) => 
        mountainService.findAllMountains()
            .then(mountains => res.json(mountains)))
    //Find Mountain By ID
    app.get('/mountains/:mid', (req, res) =>
        mountainService.findMountainById(req.params['mid'])
            .then(mountain => res.json(mountain)))

    app.get('/mountains/:mountainName', (req, res) => 
        mountainService.findMountainByName(req.params['mountainName'])
            .then(mountain => res.json(mountain)))

    app.post('/mountains', (req, res) => {
        var newMountain = new mountainModel(req.body);
        newMountain.save()
            .then(console.log('saved'))
    })
    app.put('/mountains/:mid', (req, res) =>
        mountainService.updateMountain(req.params['mid'])
            .then(() => {
                res.status(201).json({
                    message: 'Mountain Uodated!'
                });
            }))
    app.delete('/mountains/:mid', (req, res) =>
    mountainService.deleteMountain(req.params['mid'])
        .then(() => {
            res.status(200).json({
                message: 'Mountain Deleted!'
            })
        }))
}

