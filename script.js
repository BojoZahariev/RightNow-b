jQuery(function($) {
  var time = 0;

  setInterval(function() {
    $('#time').text(time);

    time += 1;
  }, 1000);
});
