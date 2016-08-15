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
};

exports.hockeyModule = Team;
