const warningModel = require('../models/warning-model');
const warningService = require('../services/warning-service');

module.exports = (app) => {
    app.get('/mountains/:mid/trails/:tid/warnings', (req, res) =>
        warningService.findWarningsForTrail(req.params['tid'])
            .then(warnings => res.json(warnings)))
    app.get('/mountains/:mid/trails/:tid/warnings/:wid', (req, res) =>
        warningService.findWarningById(req.params['wid']
            .then(warning => res.json(warning))))
            
    app.post('/warnings', (req, res) => {
        var newWarning = new warningModel(req.body);
        newWarning.save()
            .then(console.log('saved'));
    })
    app.put('/warnings/:wid', (req, res) => 
        warningService.updateWarning(req.params['wid'])
            .then(() => {
                res.status(201).json({
                    message: 'Warning Updated!'
                });
            }))
    app.delete('/warnings/:wid', (req, res) =>
        warningService.deleteWarning(req.params['wid'])
            .then(() => {
                res.status(200).json({
                    message: 'Warning Deleted!'
                })
            }))
}