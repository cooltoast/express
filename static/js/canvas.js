$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  //---------------------------------------------------------------------------
  //Write your code for p1-p12 here
  //

	$('#p1').click(function() {

  	context.fillStyle = 'yellow';
  	context.fillRect(100, 100, 25, 75);
  	
  });

  $('#p2').click(function() {

  	context.fillStyle = 'blue';
  	context.fillRect(50, 50, 50, 50);
  
  });

  $('#p3').click(function() {

  	context.fillStyle = 'red';

  	context.beginPath();
  	context.arc(200, 200, 100, 0, Math.PI/2);
  	context.closePath();

  	context.stroke();
  	context.fill(); 
  });


  $('#p4').click(function() {

  	context.fillStyle = 'green';

  	context.beginPath();
  	context.arc(400, 400, 100, 0, 2*Math.PI);
  	context.closePath();

  	context.stroke();
  	context.fill();
  });

	$('#p5').click(function() {

  	context.moveTo(25, 200);
  	context.lineTo(200, 250);
  	context.strokeStyle = 'orange';
  	context.stroke();
  	

  });

	$('#p6').click(function() {

  	context.strokeStyle = 'green';
  	context.strokeRect(250, 50, 75, 25);
  	
  });

	$('#p7').click(function() {

  	context.fillStyle = 'red';
  	context.strokeStyle = 'red';

  	context.beginPath();
  	context.arc(50, 400, 10, 0, 2*Math.PI);
  	context.closePath();

  	context.stroke();
  	context.fill();
  });

	$('#p8').click(function() {

  	context.fillStyle = 'yellow';

  	context.fillRect(200, 50, 25, 25);
  	

  	context.strokeStyle = 'blue';
  	context.strokeRect(200, 50, 25, 25);
  	
  });

	$('#p9').click(function() {

		for (var i = 0; i < 5; i++)
		{
	  	context.strokeRect(50 + 50*i, 50, 50, 50);
	  }	
  });

  $('#p10').click(function() {

		for (var i = 0; i < 100; i++)
		{
	  	context.strokeRect(5*i, 150, 5, 5);
	  }	
  });

  $('#p11').click(function() {

		for (var i = 0; i < 100; i++)
		{
	  	for (var j = 0; j < 100; j++)
	  	{	
	  		context.strokeRect(5*i, 5*j, 5, 5);
	  	}
	  }	
  });

	$('#p12').click(function() {

		for (var i = 0; i < 20; i++)
		{
	  	context.beginPath();
	  	context.arc(250, 250, 10*i, 0, 2*Math.PI);
	  	context.closePath();

	  	context.stroke();
	  	
	  }	
  });

});
