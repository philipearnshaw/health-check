'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const health = require('./utils/health-check')
const {logger} = require('./utils/logger');

const app = express();
const port = process.env.PORT || 80;

// Configure the middleware
app.use(bodyParser.json());

app.get('/health', health)

app.listen(port, () => {
    logger.log('info', `Server up on port ${port}`);
});

module.exports = {app};