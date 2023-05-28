const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const todoSchemas = require('../schemas/todoSchemas')
const todo = new mongoose();

//Get All Todo

router.get('/', async(req, res)=>{

})

//Get A Todo

router.get('/:id', async(req, res)=>{

})


//Insert A Todo

router.post('/', async(req, res)=>{

})


module.exports = router;