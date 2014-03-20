$(document).ready(function() {
  //initialize canvas
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width = canvas.width;
  var height = canvas.height;

  var x = 20; //keeps track of x position

  var clearScreen = function() {
    context.fillStyle = 'white';
    context.fillRect(0, 0, 1000, 1000);
  };

  //run an iteration of the game
  var updateGame = function() {

    clearScreen();

    context.fillStyle = 'black';
    
    context.beginPath();
    context.arc(x, 20, 20, 0, 2*Math.PI);
    context.closePath();

    context.stroke();
    context.fill();

    x = x + 5;
    
    setTimeout(updateGame, 10);
  };

  updateGame();
});
