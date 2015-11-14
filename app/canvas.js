// Dependencies
var $ = require('jquery');

var canvas = document.querySelector('canvas');
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var context = canvas.getContext('2d');

var canvasPoints = [];

// Resize canvas
$(window).on('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  canvasWidth = canvas.width;
  canvasHeight = canvas.height;
}).trigger('resize');

var drawPixel = function (x, y, color, size) {
  context.fillStyle = color;
  context.fillRect(x, y, size[0], size[1]);
};

var updateAllPoints = function () {
  canvasPoints.forEach(function (point, index) {
    canvasPoints[index] = [
      point[0] - 1,
      point[1],
      point[2],
      point[3]
    ];
  });

  context.clearRect(0, 0, canvasWidth, canvasHeight);

  canvasPoints.forEach(function (point) {
    drawPixel(point[0], point[1], point[2], point[3]);
  });
}

var drawPoint = function (intensity) {
  var color = 'rgba(0, 0, 0, ' + intensity / 1000 + ')';
  var size = [2, intensity / 3];

  canvasPoints.push([
    canvasWidth / 2,
    (canvasHeight / 2) - (size[1] / 2),
    color,
    size
  ]);

  updateAllPoints();
};

module.exports = {
  push: function (intensity) {
    drawPoint(intensity);
  }
};
