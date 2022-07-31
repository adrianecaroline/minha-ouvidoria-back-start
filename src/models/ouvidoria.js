const {sequelize, DataTypes} = require('sequelize');
const db = require('../db');

const Ouvidoria = db.define('ouvidoria', {
  idProtocol: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  id_usuario: {
    type: DataTypes.CHAR,
    allowNull: false,
    references: {
      model: 'usuario',
      key: 'username'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE', 
  },
  tipo_registro: {
    type: DataTypes.STRING,
    allowNull: false
  },
  assunto_registro: {
    type: DataTypes.STRING,
    allowNull: false
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false
  },
  numero: {
    type: DataTypes.NUMBER,
    allowNull: false
  }, 
    timestamps: false
});


// Ouvidoria.belongsTo(Usuario, {
//   constraint: true,
//   foreignKey: 'id_usuario'
// });

// Usuario.hasMany(Ouvidoria, {
//   foreignKey: 'id_usuario'
// })

module.exports = Ouvidoria;