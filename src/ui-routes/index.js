'use strict';

const express = require('express');
const router = express.Router();

// Get route
router.get([
    '/tradelicense/**',
    '/finance/**'], (req, res) => {
    const screenName = Object.values(req.params)[0];
    if(screenName){
        console.log(__dirname);
        try {
            let obj = null;
            if(req.url.match(/tradelicense/)) 
                obj = require('../ui-config/specification/tradelicense/'+screenName+'.json')
            
            if(req.url.match(/finance/)) 
                obj = require('../ui-config/specification/finance/'+screenName+'.json')
            res.json(obj);
        } catch (error) {
            res.send(screenName+' not found!');
        }
    }else{
        res.send('modeule_name not found!')
    }
});

module.exports = router;