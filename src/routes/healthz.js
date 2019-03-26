'use strict'

const moment = require('moment');

const MAX_AGE_SEC = 5;
const STATUS_PASS = 'pass';

const getDetailsForUpTime = () => {
    return {
        componentType: 'system',
        observedValue: Math.floor(process.uptime()),
        observedUnit: 's',
        status: STATUS_PASS,
        time: moment().format()
    };
}

module.exports = (req, resp) => {
    const details = [getDetailsForUpTime()];

    const healthResponse = {
        status: STATUS_PASS,
        version: process.env.npm_package_version,
        serviceId: process.env.npm_package_name,
        description: process.env.npm_package_description,
        details
    };

    resp.set('Content-Type', 'application/health+json')
        .set('Cache-Control', `max-age=${MAX_AGE_SEC}`)
        .status(200)
        .send(healthResponse);
};