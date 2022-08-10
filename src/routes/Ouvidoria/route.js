const express = require('express');
const OuvidoriaController = require('../../controllers/OuvidoriaController');
const routes = express.Router();
const Auth = require("../../middleware/auth")
const multer = require('../../config/multer')


routes.get('/ouvidoria/registers', OuvidoriaController.ListRegisters);

routes.get('/ouvidoria/registers/:id_usuario', OuvidoriaController.UserRegister, async (req, res) => {
  const auth = await Auth ({id_usuario: req.identify}, res);
  return auth;
} );

routes.get('/ouvidoria/registro/:registro', async (req, res) => {
  const registro = await OuvidoriaController.ListParams (req, res);
  return registro;
} );

// routes.post('/register', OuvidoriaController.CreateRegister);
routes.delete('/ouvidoria/:idProtocol', OuvidoriaController.DeleteRegister);

// routes.post('/register/auth', multer.single('url'), OuvidoriaController.CreateRegister, async (req, res) => {
//   const auth = await Auth({username: req.id}, res);
//   return auth;
// });

routes.post('/register/auth', multer.single('url'), OuvidoriaController.CreateRegister, async (req, res) => {
	const {username, registro, selection, titulo, descricao, endereco, numero, url } = req.body
	return res.json({username, registro, selection, titulo, descricao, endereco, numero, url})
});

module.exports = routes;