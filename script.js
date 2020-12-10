$(document).ready(function() {
  var time = 0;

  setInterval(function() {
    $('#time').text(time);

    $('#trees').text(time * 475);
    $('#treesText').text('Trees cut');
    $('#plastic').text(time * 93);
    $('#plasticText').text('Plastic pieces in the ocean');
    $('#co2').text(time * 1165732);
    $('#co2Text').text('Kilograms of CO2 emitted in the air');
    $('#ice').text(time * 8000000);
    $('#iceText').text('Kilograms of Ice melting in Antarctica');
    $('#methane').text(time * 18000);
    $('#methaneText').text('Kilograms of methane emitted in the air');

    time += 1;
  }, 1000);
});
