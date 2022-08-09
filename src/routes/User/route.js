const express = require('express');
const usuarioController = require('../../controllers/UsuarioController');
const routes = express.Router();
const Auth = require('../../middleware/auth')

// module.exports = (app) => {
//   app.post('/user', usuarioController.CreateUser);
//   app.get('/users', usuarioController.ListUsuarios);
// }

routes.get('/users', usuarioController.ListUsuarios);

routes.get('/user/:username', Auth, async (req, res) => {
  // console.log(req.identify)
  const auth = await usuarioController.getOneUser({username: req.identify}, res);
  return auth;
});

// routes.get('/user/:username', usuarioController.getOneUser);
routes.post('/user', usuarioController.CreateUser);
routes.put('/user/:username', usuarioController.UpdateUser);
routes.delete('/user/:username', usuarioController.DeleteUser);

module.exports = routes;