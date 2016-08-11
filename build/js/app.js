(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
  })
})

},{"./../js/hockey.js":2}],2:[function(require,module,exports){
function Team(name)
{
  this.name = name;
}


Team.prototype.createdPlayer = function(name, rating)
{
  if (rating <= 90) {
    alert("You've added " + name +". Their overall rating is " + rating + ".");
  } else {
    alert("You've added a superstar named " + name +". Their overall rating is an impressive " + rating + ".");
  }
}

exports.hockeyModule = Team;

},{}]},{},[1]);
