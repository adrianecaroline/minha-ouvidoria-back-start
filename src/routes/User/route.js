const express = require('express');
const usuarioController = require('../../controllers/UsuarioController');
const routes = express.Router();

// module.exports = (app) => {
//   app.post('/user', usuarioController.CreateUser);
//   app.get('/users', usuarioController.ListUsuarios);
// }

routes.get('/users', usuarioController.ListUsuarios);
routes.get('/user/:usuario', usuarioController.getOneUser);
routes.post('/user', usuarioController.CreateUser);
routes.put('/user/:username', usuarioController.UpdateUser);
routes.delete('/user/:username', usuarioController.DeleteUser);

module.exports = routes;