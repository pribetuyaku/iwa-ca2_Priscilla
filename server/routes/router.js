const express = require('express');
const route = express.Router()

const services = require('../services/render');
//const controller = require('../controller/controller');

//root route - method GET
route.get('/', services.homeRoutes);

//add users - method GET
route.get('/add_user',services.add_user);

//update users - method GET
route.get('/update-user', services.update_user);

module.exports = route