const trailService = require('../services/trail-service')

module.exports = ( app ) => {

    const findAllTrails = ( req , res ) => {
        res.send(trailService.findAllTrails())
    }

    app.get('/api/trails', findAllTrails)
}