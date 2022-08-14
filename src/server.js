const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');

const UserRoute = require('./routes/User/route');
const OuvidoriaRoute = require('./routes/Ouvidoria/route');
const CondominioRoute = require('./routes/Condominio/route');
const AuthController = require('./routes/Autenticação/route');

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.use(UserRoute);
app.use(OuvidoriaRoute);
app.use(CondominioRoute);
app.use(AuthController);

app.get('/', async(req,res)=>{
  return res.json('vc entrou na rota principal')
})

app.listen(process.env.PORT || 4200, '0.0.0.0', (req, res) => {
  console.log(`Conectado na porta ${process.env.SERVER_PORT}`);
});
