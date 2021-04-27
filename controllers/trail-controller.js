const trailModel = require('../models/trail/trail-model');
const trailService = require('../services/trail-service');

module.exports = (app) => {
    /*--------------------------GET-----------------------------------*/
    // find all trails for mountain
    app.get('/mountains/:mid/trails', (req, res) =>
        trailService.findAllTrailsForMountain(req.params['mid'])
            .then(trails => res.json(trails)))

    // find all trails
    app.get('/trails', (req, res) => 
        trailService.findAllTrails()
            .then(trails => res.json(trails)))

    // find trail by id
    app.get('/trails/:tid', (req, res) => {
        return trailService.findTrailById(req.params['tid'])
            .then(trail => res.json(trail))
        })
    
    /*--------------------------POST----------------------------------*/
    // create new trail
    app.post('/trails', (req, res) => {
        var newTrail = new trailModel(req.body);
        newTrail.save()
            .then(console.log('saved'))
    })
    
    /*--------------------------PUT-----------------------------------*/
    // update trail
    app.put('/trails/:tid', (req, res) => 
        trailService.updateTrail(req.params['tid'], req.body)
            .then(() => {
                res.status(201).json({
                    message: 'Trail Updated!'
                });
            }))
    
    /*--------------------------DELETE--------------------------------*/
    // delete trail by id
    app.delete('/trails/:tid', (req, res) =>
        trailService.deleteTrail(req.params['tid'])
            .then(() => {
                res.status(200).json({
                    message: 'Trail Deleted!'
                })
            }))
}