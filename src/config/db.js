require('dotenv').config();
const sequelize = require('sequelize');

const db = new sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
  dialect: 'mysql',
  host: process.env.HOST || 'localhost',
  define: {
    timestamps: false
  },
}); 

//vai criar a tabela se não existir
// db.sync();

db.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

module.exports = db;

//a database testando NAO EXISTE TEM QUE CRIAR AQUIII
