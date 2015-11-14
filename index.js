var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var sensor = require('./server/sensor');
sensor(io);

app.use('/dist', express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  io.emit('event', 'Server: Connected.');
});

http.listen(3000, function () {
  console.log('listening on *:3000');
});

