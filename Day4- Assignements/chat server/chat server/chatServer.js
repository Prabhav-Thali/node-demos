var express = require('express');
var http = require('http');
var socketio = require('socket.io');
var app = new express();
//Routing using Express
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html'); //load the chat window
})
var server = http.createServer(app); //connect http instance with express app 
var io = socketio.listen(server); //listens to socket connections

io.on('connection', function (socket) {
  console.log('New web socket conn');
  socket.on('user msg', function (msg) {
    //Braodcast to all the users
    io.emit('chat msg', msg);
    //io.broadcast(msg);
  })

  socket.on('disconnect', function () {
    console.log('User disconnected');
  })
})


//listens to http requests 
server.listen(4000, function () {
  console.log('listening on *:4000');
});