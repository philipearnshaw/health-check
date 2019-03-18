'use strict'

const moment = require('moment')

const pass = 'pass';

module.exports = (req, res) => {
    
    const uptime = {
        componentType: 'system',
        observedValue: process.uptime(),
        observedUnit: 's',
        status: pass,
        time: moment().format()
    }

    const details = {uptime}

    const healthResponse = {
        status: pass,
        version: process.env.npm_package_version,
        description: process.env.npm_package_name,
        details
    }
    
    res
        .set('Content-Type', 'application/health+json')
        .set('Cache-Control', 'max-age=5')
        .status(200)
        .send(healthResponse);
}