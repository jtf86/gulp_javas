var Team = require('./../js/hockey.js').hockeyModule;

$(document).ready(function() {
  $("form#player-submit").submit(function(event) {
    event.preventDefault();
    var myTeam = new Team("Avalanche");
    var playerName = $("#player-name").val();
    var playerRating = $("#player-rating").val();
    $("#players-list").append("<li>" + playerName + " - " + playerRating + " OVR");
    myTeam.createdPlayer(playerName, playerRating);
  })
})
