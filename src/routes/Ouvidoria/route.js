const express = require('express');
const OuvidoriaController = require('../../controllers/OuvidoriaController');
const routes = express.Router();

routes.get('/users/registers', OuvidoriaController.ListRegisters);
routes.post('/register', OuvidoriaController.CreateRegister);
routes.delete('/register/:idProtocol', OuvidoriaController.DeleteRegister);

module.exports = routes;