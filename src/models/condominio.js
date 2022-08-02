const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Condominio = db.define('condominios', {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  razao_social: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cnpj: {
    type: DataTypes.CHAR,
    allowNull: false
  },
  nome_condominio: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.CHAR,
    allowNull: false
  },
  senha: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cep: {
    type: DataTypes.CHAR(9),
    allowNull: false
  },
  numero: {
    type: DataTypes.CHAR,
    allowNull: false
  },
  uf: {
      type: DataTypes.CHAR(2),
      allowNull: false
 }
});

module.exports = Condominio;