$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  var drawSquare = function(x, y, sideLen, color) {
    context.strokeStyle = color;
    context.strokeRect(x, y, sideLen, sideLen);
    // Write square drawing code here
    // Delete the alerts when done
  };

  var drawCircle = function(x, y, radius, color) {
    context.strokeStyle = color;

    context.beginPath();
    context.arc(x, y, radius, 0, 2*Math.PI);
    context.closePath();

    context.stroke();
    

    // Write circle drawing code here
    // Delete the alert when done
  };

  // Write drawTriplet function here
  var drawTriplet = function(top_left_x, top_left_y, color) {
    context.strokeStyle = color;

    drawCircle(top_left_y, top_left_y, 50, color);
    drawCircle(top_left_y - 30, top_left_y + 50, 50, color);
    drawCircle(top_left_y + 30, top_left_y + 50, 50, color);
  }

  var drawTriangle = function(x, y, side_length, color) {
    context.strokeStyle = color;
    context.fillStyle = color;

    context.moveTo(x, y);

    context.lineTo(x + side_length/2, y - Math.sqrt(3)*side_length/2);
    context.stroke();
   
    context.lineTo(x + side_length, y);
    context.stroke();
      
    context.fill();

  }

  var drawTriforce = function(x, y, color) {
    drawTriangle(x, y, 25, color);
    drawTriangle(x - 25/2, y + Math.sqrt(3)*25/2, 25, color);
    drawTriangle(x + 25/2, y + Math.sqrt(3)*25/2, 25, color);
  }

  var drawTripleTriforce = function (x, y, color) {
    drawTriforce(x, y, color);
    drawTriforce(x - 25, y + Math.sqrt(3)*25, color);
    drawTriforce(x + 25, y + Math.sqrt(3)*25, color);
  }

  var drawSierpinski = function(x, y, color) {
    drawTripleTriforce(x, y, color);
    drawTripleTriforce(x - 2*25, y + 2*Math.sqrt(3)*25, color);
    drawTripleTriforce(x + 2*25, y + 2*Math.sqrt(3)*25, color);
  }

  $('#p1').click(function() {
    drawSquare(100, 200, 50, 'blue');
  });

  $('#p2').click(function() {
    drawSquare(300, 100, 25, 'green');
  });

  $('#p3').click(function() {
    drawCircle(100, 200, 50, 'red');
  });

  $('#p4').click(function() {
    drawCircle(300, 100, 25, 'black');
  });

  $('#p5').click(function() {
    drawCircle(250, 250, 25, 'blue');
    drawCircle(250, 225, 25, 'green');
    drawCircle(250, 275, 25, 'green');
    drawCircle(225, 250, 25, 'green');
    drawCircle(275, 250, 25, 'green');
    drawSquare(225, 225, 50, 'red');
  });

  $('#p6').click(function() {
    drawTriplet(250, 250, 'green');
  });

  $('#p7').click(function() {
    drawTriplet(400, 400, 'blue');
  });
  
  $('#p8').click(function() {
    drawTriplet(350, 350, 'yellow');
    drawTriplet(100, 100, 'red');
    drawTriplet(400, 150, 'blue');
    drawTriplet(400, 400, 'green');
  });

  $('#p9').click(function() {
    drawTriangle(100, 100, 25, 'red');
  });

  $('#p10').click(function() {
    drawTriforce(100, 100, 'blue');
  });

  $('#p11').click(function() {
    drawTripleTriforce(100, 100, 'green');
  });

  $('#p12').click(function() {
    drawSierpinski(100, 100, 'orange');
  });  
});
