//import dotenv
require('dotenv').config()

//import express
const express = require('express')

//import cors
const cors = require('cors')

//import router
const router = require('./router')

//import connection
require('./connection')

//create server
const mernServer = express()

//tell the server to use cors
mernServer.use(cors())

//tell the server to use express.json
mernServer.use(express.json())

//tell the server to use router
mernServer.use(router)

//set port for the server
const PORT = 4002 || process.env.PORT

//make the server listen to that port
mernServer.listen(PORT,()=>{
    console.log(`Server successfully running at port${PORT}`);
})

//to check the request
mernServer.get('/',(req, res)=>{
    res.send(`Get Request Recieved`)
})