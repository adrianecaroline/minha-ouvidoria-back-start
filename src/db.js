require('dotenv').config();
const sequelize = require('sequelize');
const db = new sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
  dialect: 'mysql',
  host: process.env.HOST || 'localhost',
  // port: '3306',
}); 

//vai criar a tabela se não existir
db.sync();

module.exports = db;

//a database testando NAO EXISTE TEM QUE CRIAR AQUIII
