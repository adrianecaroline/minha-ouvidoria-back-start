const express = require('express');
const usuarioController = require('../../controllers/UsuarioController');
const routes = express.Router();
const Auth = require('../../middleware/auth');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken')


routes.post('/email-teste', async (req,res)=> {

  const { email, senha } = req.body;

  try {
    const token = jwt.sign(
      {email: email, novaSenha: senha}, 
      process.env.TOKEN_KEY, 
      {expiresIn: 3680800}
    );

    const transport = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      secure: true, // use TLS
      auth: {
        user: "contato.minhaouvidoria@gmail.com",
        pass: 'btemaakgcltvznox',
      },
    })
    
    transport.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: 'Message',
      html: "<a href="+`${process.env.ENTIRE_URL}/change-pass/${token}`+">clique aqui para mudar a senha</a>"
    })

    return res.json('email foi') 

  } catch (err) {
    res.status(500).json({erro: "Não foi possível redefinir senha. Erro: " + err})
  }
})

routes.get('/change-pass/:token', async (req, res) => {

  const token = req.params.token;

  const data = jwt.verify(token, process.env.TOKEN_KEY)

  const newPass = await usuarioController.UpdatePass({where: {email: data.email, senha: data.novaSenha}});
  
  return res.json({data, newPass})
  
})

routes.get('/users', usuarioController.ListUsuarios);

routes.get('/user/:username', Auth, async (req, res) => {
  // console.log(req.identify)
  const auth = await usuarioController.getOneUser({username: req.identify}, res);
  return auth;
});

routes.get('/userByToken', Auth, async (req, res) => {
  console.log(req.identify)
  const auth = await usuarioController.getUser({username: req.identify});
  return res.json(auth);
});


// routes.get('/user/:username', usuarioController.getOneUser);
routes.post('/user', usuarioController.CreateUser);
routes.put('/user/:username', usuarioController.UpdateUser);
routes.delete('/user/:username', usuarioController.DeleteUser);
routes.delete('/users', usuarioController.DeleteUsers);

module.exports = routes; 