const sequelizer = require('../config/database')
const express = require('express')
const router = express.Router()
const {Basket , Fruit } = require('../models/index')

  router.post('/',  async(req, res) => {
    const data = req.body
    try {
        const bskt =await new Basket ({
                                    name : data.name,
                                    capacity : data.capacity
                                });
         await bskt.save();                    
                                return res.status(201).json({
                                    success : true,
                                    message : 'BASKET_CREATED'
                              });

                                    
        }
    catch(err ) {
        return res.status(400).json({
            success : false,
            message : err.message
      });
    }                         
});


router.get('/', async(req, res) => {
    let baskets = [];
try {
    baskets = await Basket.findAll();
    return res.status(200).json({
                    baskets,
                    success : true
                  });
    }
  catch(err) {
    return res.status(200).json({
        baskets : [],
        success : false,
        message : "FAILED"
      });
    }
                          
});

router.get('/:id', async (req, res) => {
    const basketId = req.params.id

    const basket = await Basket.findAll({ 
                               where : { id :  basketId },
    include : [{
        model :  Fruit ,
        required: false,
        attributes: ['id', 'basket_id',  'weight', 'name', 'updatedAt'],
        order:  [
            ['name']
          ]  
          }] 
        })
    console.log(basket)
    if (basket) 
        return res.status(200).json({ success : true, basket })
    else 
        return res.status(200).json({ success : false, basket : {} });
});


router.post('/:id', async(req, res) => {    
  console.log(req.body)
const {basket_id, weight, name } = req.body
try {
const fruit = await new Fruit({
                       basket_id,
                       weight, 
                       name});
  await fruit.save();
  return res.status(201).json({
    success : true
});
}
catch(err) {
  return res.status(500).json({
            success : false,
            message : err.message
      });
    }
})

router.delete('/:id',  async(req, res) => {
  const basket_id = req.params.id
  try {
      const basket = await Basket.findOne({where : {id : basket_id } });
      (await basket).destroy();
      return res.status(200).json({
                                    success : true,
                                    message : "DELETED",
                               })
        }
  catch(err) {
      return res.status(200).json({
                                      success : false,
                                      message : err.message
      });
  }    
});

module.exports=router