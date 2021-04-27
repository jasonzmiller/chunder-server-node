const warningModel = require('../models/warning/warning-model');
const warningService = require('../services/warning-service');

module.exports = (app) => {
    /*--------------------------GET-----------------------------------*/
    // get warnings for a trail
    app.get('/mountains/:mid/trails/:tid/warnings', (req, res) =>
        warningService.findWarningsForTrail(req.params['tid'])
            .then(warnings => res.json(warnings)))

    // get warning by a warning id
    app.get('/mountains/:mid/trails/:tid/warnings/:wid', (req, res) =>
        warningService.findWarningById(req.params['wid']
            .then(warning => res.json(warning))))

    // get all warnings
    app.get('/warnings', (req, res) => {
        warningService.findAllWarnings()
            .then(warnings => res.json(warnings))
    })
    
    /*--------------------------POST----------------------------------*/
    // create a new warning
    app.post('/warnings', (req, res) => {
        var newWarning = new warningModel(req.body);
        newWarning.save()
            .then(console.log('saved'));
    })

    /*--------------------------PUT-----------------------------------*/
    // update a specific item for a warning
    app.put('/warnings/:wid', (req, res) => 
        warningService.updateWarning(req.params['wid'], req.body)
            .then(() => {
                res.status(201).json({
                    message: 'Warning Updated!'
                });
            }))

    /*--------------------------DELETE--------------------------------*/
    // delete a warning by id
    app.delete('/warnings/:wid', (req, res) =>
        warningService.deleteWarning(req.params['wid'])
            .then(() => {
                res.status(200).json({
                    message: 'Warning Deleted!'
                })
            }))
}