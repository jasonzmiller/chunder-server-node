const trailModel = require('../models/trail-model');
const trailService = require('../services/trail-service');

module.exports = (app) => {
    app.get('/mountains/:mid/trails', (req, res) =>
        trailService.findAllTrailsForMountain(req.params['mid'])
            .then(trails => res.json(trails)))
    
    app.get('/mountains/:mid/trails/:tid', (req, res) =>
        trailService.findTrailById(req.params['tid'])
            .then(trail => res.json(trail)))

    app.get('/trails', (req, res) => 
        trailService.findAllTrails()
            .then(trails => res.json(trails)))

    app.get('/trails/:tid', (req, res) =>
        trailService.findTrailById(req.params['tid'])
            .then(trail => res.json(trail)))
    
    app.post('/trails', (req, res) => {
        var newTrail = new trailModel(req.body);
        newTrail.save()
            .then(console.log('saved'))
    })
    
    app.put('/trails/:tid', (req, res) => 
        trailService.updateTrail(req.params['tid'])
            .then(() => {
                res.status(201).json({
                    message: 'Trail Updated!'
                });
            }))
    
    app.delete('/trails/:tid', (req, res) =>
        trailService.deleteTrail(req.params['tid'])
            .then(() => {
                res.status(200).json({
                    message: 'Trail Deleted!'
                })
            }))
}