const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Komik = sequelize.define('Komik', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'komik',
  timestamps: true
});

module.exports = Komik;