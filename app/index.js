
// Styles
require('style!css!../css/main.css');

// Libs
var io = require('socket.io-client/lib/index');
var $ = require('jquery');

var socket = io();

// Modules
var canvas = require('./canvas.js');

socket.on('connect', function () {
  console.log('connected');
});

socket.on('event', function (data) {
  if (data.intensity) {
    canvas.push(data.intensity);
  }
});

socket.on('disconnect', function () {
  console.log('disconnected');
});
