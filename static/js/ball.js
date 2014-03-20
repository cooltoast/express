$(document).ready(function() {
  //initialize canvas
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width = canvas.width;
  var height = canvas.height;

  var ball1 = {
    radius: 20,
    x: 20, //keeps track of x position
    y: 20, //keeps track of y position
    vx: 5, //keeps track of x velocity
    vy: 5 //keeps track of y velocity
  };
  
  var ball2 = {
    radius: 50,
    x: 50, //keeps track of x position
    y: height - 50, //keeps track of y position
    vx: 5, //keeps track of x velocity
    vy: -5 //keeps track of y velocity
  };

  $('#canvas').click(function() {
    ball1.vx = -ball1.vx;
    ball1.vy = -ball1.vy;

    ball2.vx = -ball2.vx;
    ball2.vy = -ball2.vy;
  });

  var clearScreen = function() {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
  };

  //run an iteration of the game
  var updateGame = function() {

    clearScreen();

    context.fillStyle = 'black';
    
    context.beginPath();
    context.arc(ball1.x, ball1.y, ball1.radius, 0, 2*Math.PI);
    context.closePath();
    context.stroke();
    context.fill();

    context.beginPath();
    context.arc(ball2.x, ball2.y, ball2.radius, 0, 2*Math.PI);
    context.closePath();
    context.stroke();
    context.fill();

  
    ball1.x = ball1.x + ball1.vx;
    ball1.y = ball1.y + ball1.vy;

    ball2.x = ball2.x + ball2.vx;
    ball2.y = ball2.y + ball2.vy;

    if((ball1.x == width - ball1.radius) || (ball1.x == ball1.radius))
    {
      ball1.vx = -ball1.vx;
    }

    if((ball1.y == height - ball1.radius) || (ball1.y == ball1.radius))
    {
      ball1.vy = -ball1.vy;
    }

    if((ball2.x == width - ball2.radius) || (ball2.x == ball2.radius))
    {
      ball2.vx = -ball2.vx;
    }


    if((ball2.y == height - ball2.radius) || (ball2.y == ball2.radius))
    {
      ball2.vy = -ball2.vy;
    }

    setTimeout(updateGame, 10);
  };

  updateGame();
});
