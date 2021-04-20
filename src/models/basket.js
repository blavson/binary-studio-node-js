const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database')

const Basket = sequelize.define('basket', {
        id: {
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name : {
            type :  DataTypes.STRING 
        } ,
        capacity  : {
            type :   DataTypes.BIGINT
        },        
        createdAt : {
            type : DataTypes.DATE
        },
        updatedAt : {
            type : DataTypes.DATE
        },
       })
   
    module.exports = Basket
    