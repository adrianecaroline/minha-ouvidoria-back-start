const express = require('express');
const OuvidoriaController = require('../../controllers/OuvidoriaController');
const routes = express.Router();
const Auth = require("../../middleware/auth")

routes.get('/ouvidoria/registers', OuvidoriaController.ListRegisters);

routes.get('/ouvidoria/registers/:id_usuario', OuvidoriaController.UserRegister, async (req, res) => {
  const auth = await Auth ({id_usuario: req.identify}, res);
  return auth;
} );

// routes.post('/register', OuvidoriaController.CreateRegister);
routes.delete('/ouvidoria/:idProtocol', OuvidoriaController.DeleteRegister);
routes.post('/register/auth', OuvidoriaController.CreateRegister, async (req, res) => {
  const auth = await Auth({username: req.id}, res);
  return auth;
});

module.exports = routes;