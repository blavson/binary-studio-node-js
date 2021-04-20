const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('binarystudio', 'bsdude', 'password', {
    dialect: 'mariadb',
    dialectOptions: {
      // Your mariadb options here
      // connectTimeout: 1000
    }
  });

  module.exports = sequelize