const express = require('express');
const router = express.Router();
const db = require('../db/db');

router.get('/', async(req,res,next)=>{
    //res.json({test:"nilesh"});
    try{
        let results = await db.all();
        res.json(results);
    }catch(e)
    { 
        console.log(e);
        //console.log('catch ar routes ');
        res.sendStatus(500);
    }
});

router.get('/:id', async(req,res,next)=>{
    //res.json({test:"nilesh"});
    try{
        let results = await db.onerss(req.params.id);
        res.json(results);
    }catch(e)
    {
        console.log(e);
        //console.log('catch ar routes ');
        res.sendStatus(500);
    }
});





module.exports = router;