$(document).ready(function(){
  $('#time').text(moment());
});

var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('.weatherForm').submit(function(event) {
    event.preventDefault();
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      var ftemp = Math.floor((response.main.temp * (9/5))-459.67)
      $('.showWeather').text("The city you have chosen is " + city + ". The temperature there is " + ftemp + "° F.");
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
