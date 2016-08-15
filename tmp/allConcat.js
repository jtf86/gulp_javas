$(document).ready(function() {
  $(".title").click(function(){
    alert("WHY DID YOU CLICK THAT?!!?");
  });
});

var Team = require('./../js/hockey.js').hockeyModule;



$(document).ready(function() {
  $("#c").append("<li>Wayne Gretzky - 99 OVR </li>");
  $("#lw").append("<li>Pavel Bure - 95 OVR </li>");
  $("#rw").append("<li>Teemu Selanne - 93 OVR </li>");
  $("#ld").append("<li>Scott Stevens - 94 OVR </li>");
  $("#rd").append("<li>Ray Bourque - 95 OVR </li>");
  $("#g").append("<li>Patrick Roy - 97 OVR </li>");
  $("form#player-submit").submit(function(event) {
    event.preventDefault();
    var myTeam = new Team("Avalanche");
    var playerName = $("#player-name").val();
    var playerPosition = $("#player-position").val();
    var playerRating = $("#player-rating").val();
    $("#" + playerPosition).append("<li>" + playerName + " - " + playerRating + " OVR");
    // myTeam.createdPlayer(playerName, playerRating);
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});
