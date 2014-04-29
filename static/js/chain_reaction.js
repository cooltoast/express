$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  var gameState = "menu";

  var menuText = "CLICK TO PLAY";

  var curLevel = 0;

  var levelText = "Level 1 - React 1 out of 5 balls";

  var reacting = false;

  var numReacted = 0;

  var reactions = [];

  var balls = [];

  var levels = [];

  var modifier = 1;

  var colors = ["black", "red", "blue", "green", "pink", "orange", "purple"];

  //create levels
  for (var i = 0; i < 9; i++)
  {
    var level = {
      num: i,
      minReactions: (5 * i) + 5,
      numBalls: (10 * i) + 10
    };

    levels.push(level);
  }

  //create balls 
  for (var i = 0; i < levels[curLevel].numBalls; i++)
  {
    modifier = -modifier;      

    var b = {
      radius: 10,
      x: (width - 20) * Math.random() + 10, //keeps track of x position
      y: (height - 20) * Math.random() + 10, //keeps track of y position
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

    if (gameState == "menu")
    {
      context.fillStyle = "black";

      context.font = "50px Arial";

      context.fillText(menuText, width/2 - 175, height/2 - 50);

      gameState == "playing";
    }

    else if (gameState == "playing")
    {
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
        reactions[i].timer = reactions[i].timer + 1;
        
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

        if (reactions[i].timer > 200)
        {
          reactions[i].radius = reactions[i].radius - 1;
        }

        else if (reactions[i].radius < 30)
        {
          reactions[i].radius = reactions[i].radius + 1;
        }

        if (reactions[i].radius == 0)
        {
          reactions.splice(i, 1);
        }
      }
      
      //check for collisions
      for (var i = 0; i < balls.length; i++)
      {
        for (var j = 0; j < reactions.length; j++) 
        {
          if (balls.length > 0)
          {  
            var xdiff = (reactions[j].x - balls[i].x);
            var ydiff = (reactions[j].y - balls[i].y);
            var dist = Math.sqrt(xdiff * xdiff + ydiff * ydiff);
            
            //if collision, make new reaction object and add to array
            if (dist <= (reactions[j].radius + balls[i].radius))
            {
              var new_reaction = {
                radius: 10,
                x: balls[i].x, //keeps track of x position
                y: balls[i].y, //keeps track of y position
                vx: 0, //keeps track of x velocity
                vy: 0, //keeps track of y velocity
                color: balls[i].color,
                timer: 0
              };

              reactions.push(new_reaction);

              numReacted = numReacted + 1;

              balls.splice(i, 1);

              if (i >= 1)
              {
                i--;
              }
              
            }
          }
        }
      }
      

      context.fillStyle = "black";

      context.font = "20px Arial";

      context.fillText(levelText, width/2 - 125, height/2 - 25);

      context.fillText("Reactions: " + numReacted, width/2 - 50, height/2 + 25);

      //check for a win
      if (reacting && reactions.length == 0)
      {
        
        if (numReacted >= levels[curLevel].minReactions && curLevel < 9)
        {
          menuText = "You win! Click again.";
          curLevel = curLevel + 1;
        }

        else
        {
          menuText = "Game over!";
          curLevel = 0;

          for (var i = 0; i < levels[curLevel].numBalls; i++)
          {
            modifier = -modifier;      

            var b = {
              radius: 10,
              x: (width - 20) * Math.random() + 10, //keeps track of x position
              y: (height - 20) * Math.random() + 10, //keeps track of y position
              vx: modifier * 10 * Math.random(), //keeps track of x velocity
              vy: modifier * 10 * Math.random(), //keeps track of y velocity
              color: colors[Math.floor((Math.random()*colors.length))]
            };

            balls.push(b);
          }
        }
        
        gameState = "menu";


        
      }
    }
      
    requestAnimationFrame(updateGame);
  };

  // Handle a canvas click event
  $('#game_canvas').click(function(e) {

    if (gameState == "menu")
    {
      levelText = "Level " + (levels[curLevel].num + 1) + " - React " + levels[curLevel].minReactions + " out of " + levels[curLevel].numBalls + " balls";

      gameState = "playing";

      reacting = false;
      numReacted = 0;

      if (curLevel > 0)
      {
        for (var i = 0; i < levels[curLevel].numBalls; i++)
        {
          modifier = -modifier;      

          var b = {
            radius: 10,
            x: (width - 20) * Math.random() + 10, //keeps track of x position
            y: (height - 20) * Math.random() + 10, //keeps track of y position
            vx: modifier * 10 * Math.random(), //keeps track of x velocity
            vy: modifier * 10 * Math.random(), //keeps track of y velocity
            color: colors[Math.floor((Math.random()*colors.length))]
          };

          balls.push(b);
        }
      }

    }

    else if (gameState == "playing" && !reacting)
    {
      // Find the mouse x and y relative to the top-left corner of the canvas
      var x = e.pageX - $(this).offset().left;
      var y = e.pageY - $(this).offset().top;
      // PUT STUFF HERE

      modifier = -modifier;

      var new_reaction = {
        radius: 1,
        x: x, //keeps track of x position
        y: y, //keeps track of y position
        vx: 0,
        vy: 0,
        color: colors[Math.floor((Math.random()*7))],
        timer: 0
      };

      reacting = true;

      reactions.push(new_reaction);
    }
  });

  updateGame();
});
