const express = require('express')

const app = express()

const http = require('http').Server(app)

const io =  require('socket.io')(http)

Server.listen(8080, function(){
    console.log('servidor corriendo en http://localhost:8080')
})
