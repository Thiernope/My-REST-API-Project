const Joi = require('joi');
const express = require('express');
const router = express.Router();
const Query = require('../database/models/query-model.js');


//POST A QUERY

router.post('/queries', async(req, res)=>{
    const query = new Query({
        lastName: req.body.firstName,
        firstName: req.body.lastName,
        email: req.body.email,
        message: req.body.message
    });
    
    
    try{
    const savedQuery = await query.save();
    res.json(savedQuery);
    }catch(err){
    res.json({message: err});
    }
    })

    //GET ALl QUERIES
router.get('/queries', async(req, res)=>{
   try{
   const queries = await Query.find();
   res.json(queries);
   }catch(err){
  res.json({message: err})
   }
    });

//GET SPECIFIC QUERY


    module.exports = router;