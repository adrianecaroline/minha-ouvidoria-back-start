const express = require('express');
const AuthController = require('../../controllers/AutenticacaoController');
const routes = express.Router();
const Auth = require("../../middleware/auth")



routes.post('/auth/user/login', AuthController.authUser, async (req, res) => {
  const auth = await AuthController.Auth({username: req.id}, res);
  return auth;
});
routes.post('/auth/condominio/login', AuthController.authCondominio, async (req, res) => {
  const auth = await AuthController.Auth({id: req.id}, res);
  return auth;
});

module.exports = routes;