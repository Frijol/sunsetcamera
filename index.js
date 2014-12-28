var SunCalc = require('suncalc');
var tessel = require('tessel');
var camera = require('camera-vc0706').use(tessel.port['A']);

var myCoords = {
  lat: 37.8717,
  lon: 122.2728
};

camera.on('ready', function () {
  setup();
});

function setup () {
  setTimeout(function () {
    atSunset();
  }, setTimer);
}

function setTimer() {
  var now = new Date();
  var sunset = SunCalc.getTimes(now, myCoords.lat, myCoords.lon).sunset;
  return (sunset - now);
}

function atSunset () {
  camera.takePicture(function (image) {
    sendImage();
    setup();
  });
}

function sendImage() {
  // Do something with the picture
}
