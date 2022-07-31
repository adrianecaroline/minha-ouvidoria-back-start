const express = require('express');
const app = express();
const cors = require('cors');
const UserRoute = require('./routes/User/route')
const OuvidoriaRoute = require('./routes/Ouvidoria/route')

app.use(express.json());
app.use(cors());

app.use(UserRoute);
app.use(OuvidoriaRoute);

app.listen(process.env.SERVER_PORT, (req, res) => {
  console.log(`Conectado na porta ${process.env.SERVER_PORT}`);
});