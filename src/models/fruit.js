const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database')

const Fruit = sequelize.define('fruit', {
    id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    basket_id : {
            type:Sequelize.INTEGER
        }, 
        name : {
            type :  DataTypes.STRING 
        } ,
        weight  : {
            type :   DataTypes.BIGINT
        },        
       })
   
    module.exports = Fruit
    