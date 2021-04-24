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
}

