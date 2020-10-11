const express = require('express');
const router = express.Router();
const Users = require('./user-helper');
router.get('/',async (req,res)=>{
  const users = await Users.find()
  res.status(201).json(users)
})

router.post('/',async (req,res)=>{
    const newuser = await Users.add({
        username:req.body.username,
        useraddress:req.body.useraddress
    })
    res.status(201).json(newuser)
})

module.exports = router