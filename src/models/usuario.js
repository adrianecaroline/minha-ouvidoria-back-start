const sequelize = require('sequelize');
const db = require('../db');
const Ouvidoria = require('./ouvidoria')

const User = db.define('usuario', {
    username: {
      type: sequelize.CHAR,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: sequelize.STRING,
      allowNull: false
    },
    dtNasci: {
      type: sequelize.DATE,
      allowNull: false
    },
    email: {
      type: sequelize.STRING,
      allowNull: false,
      unique: true
    },
    senha: {
      type: sequelize.CHAR(8),
      allowNull: false
    },
    condominio: {
      type: sequelize.STRING,
      allowNull: false
    },
    bloco: {
      type: sequelize.STRING,
      allowNull: false
    },
    apto: {
      type: sequelize.STRING,
      allowNull: false
    },
    cep: {
      type: sequelize.CHAR(9),
      allowNull: false
    },
    uf: {
      type: sequelize.CHAR(2),
      allowNull: false
    },
    
  }
)

Ouvidoria.belongsTo(User, {
  foreignKey: 'id_usuario'
});
// User.hasMany(Ouvidoria, {
//   foreignKey: 'usuario'
// })


module.exports = User;