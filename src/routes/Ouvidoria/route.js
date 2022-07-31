const express = require('express');
const OuvidoriaController = require('../../controllers/OuvidoriaController');
const routes = express.Router();

routes.get('/users/registers', OuvidoriaController.ListRegisters);
routes.post('/user/:username/register', OuvidoriaController.CreateRegister);

module.exports = routes;