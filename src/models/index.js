const Basket = require('./basket')
const Fruit = require('./fruit')



Basket.hasMany(Fruit, { foreignKey : 'basket_id'})      
Fruit.belongsTo(Basket,  { foreignKey : 'basket_id'});

module.exports  = { Basket,Fruit }