$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  var reactions = [];

  var numBalls = 50;

  var balls = [];

  var modifier = 1;

  var colors = ["black", "red", "blue", "green", "pink", "orange", "purple"];

  for (var i = 0; i < numBalls; i++)
  {
    modifier = -modifier;      

    /*
    var b = {
      radius: 20 * Math.random(),
      x: width * Math.random(), //keeps track of x position
      y: height * Math.random(), //keeps track of y position
      vx: modifier * 10 * Math.random(), //keeps track of x velocity
      vy: modifier * 10 * Math.random(), //keeps track of y velocity
      color: colors[Math.floor((Math.random()*colors.length))]
    };
    */

    var b = {
      radius: 10,
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

    for (var i = 0; i < reactions.length; i++)
    {
      if((reactions[i].x >= width - reactions[i].radius) || (reactions[i].x <= reactions[i].radius))
      {
        reactions[i].vx = -reactions[i].vx;
      }

      if((reactions[i].y >= height - reactions[i].radius) || (reactions[i].y <= reactions[i].radius))
      {
        reactions[i].vy = -reactions[i].vy;
      }

      reactions[i].x = reactions[i].x + reactions[i].vx;
      reactions[i].y = reactions[i].y + reactions[i].vy;

      context.fillStyle = reactions[i].color;

      context.beginPath();
      context.arc(reactions[i].x, reactions[i].y, reactions[i].radius, 0, 2*Math.PI);
      context.closePath();
      context.stroke();
      context.fill();

      if (reactions[i].radius < 30)
      {
        reactions[i].radius = reactions[i].radius + 1;
      }
    }
    
    
    for (var i = 0; i < balls.length; i++)
    {
      for (var j = 0; j < reactions.length; j++) 
      {
        var xdiff = (reactions[j].x - balls[i].x);
        var ydiff = (reactions[j].y - balls[i].y);
        var dist = Math.sqrt(xdiff * xdiff + ydiff * ydiff);
        
        if (dist <= (reactions[j].radius + balls[i].radius))
        {
          alert('BOOM');
        }
      }
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
      radius: 1,
      x: x, //keeps track of x position
      y: y, //keeps track of y position
      //vx: modifier * 10 * Math.random(), //keeps track of x velocity
      //vy: modifier * 10 * Math.random(), //keeps track of y velocity
      vx: 0,
      vy: 0,
      color: colors[Math.floor((Math.random()*7))]
    };

    reactions.push(b_click);

  });

  updateGame();
});
