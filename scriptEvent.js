function startCountdown(elementId, targetDate) {
  var element = document.getElementById(elementId);
  if (!element) return;

  var target = new Date(targetDate).getTime();
  var timer = setInterval(function () {
    var now = new Date().getTime();
    var interval = target - now;

    if (interval < 0) {
      clearInterval(timer);
      element.innerHTML = "Countdown selesai";
      return;
    }

    var days = Math.floor(interval / (1000 * 60 * 60 * 24));
    var hours = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((interval % (1000 * 60)) / 1000);

    element.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  }, 1000);
}

startCountdown("countdown", "August 20, 2023 16:00:00");
startCountdown("countdown2", "September 7, 2023 10:00:00");
startCountdown("countdown3", "September 22, 2023 10:00:00");
startCountdown("countdown4", "July 22, 2023 10:00:00");
