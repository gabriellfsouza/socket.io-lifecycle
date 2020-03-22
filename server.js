const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const app = express();

app.use('/',express.static(`${__dirname}/public`));

const server = http.createServer(app).listen(3000);

const io = socketIO(server)

io.on('connection',socket=>{
  io.emit('user.add',socket.id);
  socket.on('disconnect',()=>{
    io.emit('user.remove',socket.id);
  });
});