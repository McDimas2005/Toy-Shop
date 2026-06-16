// COUNTDOWN 1
var target = new Date("August 20, 2023 16:00:00").getTime();
var countdown = setInterval(function() {
  var now = new Date().getTime();
  var interval = target - now;
  var days = Math.floor(interval / (1000 * 60 * 60 * 24));
  var hours = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((interval % (1000 * 60)) / 1000);
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  if (interval < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Countdown selesai";
  }
}, 1000);
// COUNTDOWN 2
var target2 = new Date("September 7, 2023 10:00:00").getTime();
var countdown2 = setInterval(function() {
  var now = new Date().getTime();
  var interval = target2 - now;
  var days2 = Math.floor(interval / (1000 * 60 * 60 * 24));
  var hours2 = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes2 = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((interval % (1000 * 60)) / 1000);
  document.getElementById("countdown2").innerHTML = days2 + "d " + hours2 + "h " + minutes2 + "m " + seconds2 + "s ";
  if (interval < 0) {
    clearInterval(countdown2);
    document.getElementById("countdown2").innerHTML = "Countdown selesai";
  }
}, 1000);
// COUNTDOWN 3
var target3 = new Date("September 22, 2023 10:00:00").getTime();
var countdown3 = setInterval(function() {
  var now = new Date().getTime();
  var interval = target3 - now;
  var days3 = Math.floor(interval / (1000 * 60 * 60 * 24));
  var hours3 = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes3 = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
  var seconds3 = Math.floor((interval % (1000 * 60)) / 1000);
  document.getElementById("countdown3").innerHTML = days3 + "d " + hours3 + "h " + minutes3 + "m " + seconds3 + "s ";
  if (interval < 0) {
    clearInterval(countdown3);
    document.getElementById("countdown3").innerHTML = "Countdown selesai";
  }
}, 1000);
// COUNTDOWN 4
var target4 = new Date("July 22, 2023 10:00:00").getTime();
var countdown4 = setInterval(function() {
  var now = new Date().getTime();
  var interval = target4 - now;
  var days4 = Math.floor(interval / (1000 * 60 * 60 * 24));
  var hours4 = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes4 = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
  var seconds4 = Math.floor((interval % (1000 * 60)) / 1000);
  document.getElementById("countdown4").innerHTML = days4 + "d " + hours4 + "h " + minutes4 + "m " + seconds4 + "s ";
  if (interval < 0) {
    clearInterval(countdown3);
    document.getElementById("countdown4").innerHTML = "Countdown selesai";
  }
}, 1000);


