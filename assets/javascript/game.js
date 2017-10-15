$(document).ready(function() {

  var targetScore = 0;
  var yourScore = 0;
  var wins = 0;
  var losses = 0;
  var bling = {
    migos: {name: "migos", value: 0},
    grillz: {name: "grillz", value: 0},
    ring: {name: "ring", value: 0},
    watch: {name: "watch", value: 0},

  };
var startRestart = function () {

  yourScore = 0;

  targetScore = getRandom(19, 120);

  bling.migos.value = getRandom(1, 12);
  bling.grillz.value = getRandom(1, 12);
  bling.ring.value = getRandom(1, 12);
  bling.watch.value = getRandom(1, 12);

  $("#your-score").text(yourScore);
  $("#target-score").text(targetScore);

};

var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;

};

startRestart();



var referee = function () {
  if (yourScore > targetScore) {
    alert("Here hold this L")
    losses++;
    $("#loss-count").text(losses)
    startRestart();
  }

  else if (yourScore < targetScore ) {
    console.log("keep trying!")
  }

  else {
    alert("WINNER!")
    wins++;
    $("win-count").text(wins)
    startRestart();
  }

};

var addValues = function(clickedBling) {

  yourScore += clickedBling.value;

 
  $("#your-score").text(yourScore);

};

$("#migos").click(function() {
  addValues(bling.migos);
  referee();
});

$("#ring").click(function() {
  addValues(bling.ring);
  referee();
});

$("#grillz").click(function() {
  addValues(bling.grillz);
  referee();
});

$("#watch").click(function() {
  addValues(bling.watch);
  referee();
});
})



