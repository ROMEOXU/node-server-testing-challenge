const express = require('express');
const server = express();
const users = require('./users');
server.use(express.json());
server.use('/users',users)

server.get('/',(req,res)=>{
    res.status(200).json('i am here,romeo')
})

module.exports = server;