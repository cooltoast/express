$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  var numBalls = 50;

  var balls = [];

  var modifier = 1;

  var colors = ["black", "red", "blue", "green", "pink", "orange", "purple"];

  for (var i = 0; i < numBalls; i++)
  {
    modifier = -modifier;      

    var b = {
      radius: 20 * Math.random(),
      x: width * Math.random(), //keeps track of x position
      y: height * Math.random(), //keeps track of y position
      vx: modifier * 10 * Math.random(), //keeps track of x velocity
      vy: modifier * 10 * Math.random(), //keeps track of y velocity
      color: colors[Math.floor((Math.random()*colors.length))]
    };

    balls.push(b);
  }

  var clearScreen = function() {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
  };

  //run an iteration of the game
  var updateGame = function() {

    clearScreen();

    

    for (var i = 0; i < balls.length; i++)
    {
      if((balls[i].x >= width - balls[i].radius) || (balls[i].x <= balls[i].radius))
      {
        balls[i].vx = -balls[i].vx;
      }

      if((balls[i].y >= height - balls[i].radius) || (balls[i].y <= balls[i].radius))
      {
        balls[i].vy = -balls[i].vy;
      }

      balls[i].x = balls[i].x + balls[i].vx;
      balls[i].y = balls[i].y + balls[i].vy;

      context.fillStyle = balls[i].color;
    
      

      context.beginPath();
      context.arc(balls[i].x, balls[i].y, balls[i].radius, 0, 2*Math.PI);
      context.closePath();
      context.stroke();
      context.fill();
    }

    
    requestAnimationFrame(updateGame);
  };

  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    // PUT STUFF HERE

    modifier = -modifier;

    var b_click = {
      radius: 20 * Math.random(),
      x: x, //keeps track of x position
      y: y, //keeps track of y position
      vx: modifier * 10 * Math.random(), //keeps track of x velocity
      vy: modifier * 10 * Math.random(), //keeps track of y velocity
      color: colors[Math.floor((Math.random()*7))]
    };

    balls.push(b_click);
/*
    for (var i = 0; i < balls.length; i++)
    {
      var ball_surrounding = Math.sqrt((x - balls[i].x)^2 + (y - balls[i].y)^2);

      if (ball_surrounding <= balls[i].radius)
      {
        balls.splice(i, 1);
      }

    }
*/
  });

  updateGame();
});
