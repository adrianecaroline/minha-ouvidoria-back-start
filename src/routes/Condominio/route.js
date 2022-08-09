const express = require('express');
const condominioController = require('../../controllers/CondominioController');
const routes = express.Router();

routes.get('/admin' , condominioController.getCondominio);
routes.post('/q-admin' , condominioController.CreateCondominio);
routes.delete('/q-admin/:id' , condominioController.DeleteCondominio);

module.exports = routes;