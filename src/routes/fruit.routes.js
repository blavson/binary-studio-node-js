const sequelizer = require('../config/database')
const express = require('express')
const router = express.Router()
const {Basket , Fruit } = require('../models/index')

  router.delete('/:id',  async(req, res) => {
    const fruit_id = req.params.id
               
    
    try {
        const fruit = await Fruit.findOne({where : {id : fruit_id } });
        (await fruit).destroy();
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