$(document).ready(function() {
  var time = 0;

  setInterval(function() {
    $('#time').text(time);

    $('#trees').text(time * 475);
    $('#plastic').text(time * 93);
    $('#co2').text(time * 1165732);
    $('#ice').text(time * 8000000);
    $('#methane').text(time * 18000);

    time += 1;
  }, 1000);
});
