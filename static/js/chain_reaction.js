$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  var balls = [];

  var b0 = {
    radius: 20,
    x: 20, //keeps track of x position
    y: 20, //keeps track of y position
    vx: 5, //keeps track of x velocity
    vy: 5 //keeps track of y velocity
  };

  var b1 = {
    radius: 10,
    x: width - 10, //keeps track of x position
    y: height - 10, //keeps track of y position
    vx: 5, //keeps track of x velocity
    vy: 5 //keeps track of y velocity
  };

  var b2 = {
    radius: 50,
    x: width - 50, //keeps track of x position
    y: 50, //keeps track of y position
    vx: 5, //keeps track of x velocity
    vy: 5 //keeps track of y velocity
  };

  balls.push(b0);
  balls.push(b1);
  balls.push(b2);


  var clearScreen = function() {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
  };

  //run an iteration of the game
  var updateGame = function() {

    clearScreen();

    context.fillStyle = 'black';


    for (var i = 0; i < balls.length; i++)
    {
      context.beginPath();
      context.arc(balls[i].x, balls[i].y, balls[i].radius, 0, 2*Math.PI);
      context.closePath();
      context.stroke();
      context.fill();
    
      balls[i].x = balls[i].x + balls[i].vx;
      balls[i].y = balls[i].y + balls[i].vy;

    }


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

  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    // PUT STUFF HERE
  });

  updateGame();
});
