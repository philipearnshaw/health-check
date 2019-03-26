'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const healthzRoute = require('./routes/healthz');

const app = express();

// Configure the middleware
app.use(bodyParser.json());

app.get('/healthz', healthzRoute);

module.exports = app;