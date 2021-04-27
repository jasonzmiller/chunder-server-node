const mountainModel = require('../models/mountain/mountain-model')
const mountainService = require('../services/mountain-service')

module.exports = (app) => {
    /*--------------------------GET-----------------------------------*/
    // Find All Mountains
    app.get('/mountains', (req, res) => 
        mountainService.findAllMountains()
            .then(mountains => res.json(mountains)))

    // Find Mountain By ID
    app.get('/mountains/:mid', (req, res) =>
        mountainService.findMountainById(req.params['mid'])
            .then(mountain => res.json(mountain)))

    // find mountian by name
    app.get('/mountains/:mountainName', (req, res) => 
        mountainService.findMountainByName(req.params['mountainName'])
            .then(mountain => res.json(mountain)))

    /*--------------------------POST----------------------------------*/
    // create new mountain
    app.post('/mountains', (req, res) => {
        var newMountain = new mountainModel(req.body);
        newMountain.save()
            .then(console.log('saved'))
    })

    /*--------------------------PUT-----------------------------------*/
    // update mountain
    app.put('/mountains/:mid', (req, res) =>
        mountainService.updateMountain(req.params['mid'], req.body)
            .then(() => {
                res.status(201).json({
                    message: 'Mountain Updated!'
                });
            }))

    // add mountain to user
    app.put('/profile/:uid/mountains/:mid', (req, res) => 
        mountainService.addMountainToUser(req.params)
            .then(() => {
                res.status(201).json({
                    message: 'Added Mountain to User!'
                })
            })
    )

    /*--------------------------DELETE--------------------------------*/
    // delete mountain by id
    app.delete('/mountains/:mid', (req, res) =>
    mountainService.deleteMountain(req.params['mid'])
        .then(() => {
            res.status(200).json({
                message: 'Mountain Deleted!'
            })
        }))
}

