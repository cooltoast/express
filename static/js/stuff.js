//alert('YOOOO'); // edit me!

// Problem 1 (Say Hello!) ---------------------------------------------------
$('#say_hello').click(function() {
  alert('Hello world!');			
  // WRITE CODE HERE
});


// Problem 2 (Houdini) ------------------------------------------------------
$('#disappear').click(function() {
  //WRITE CODE HERE
  $('#houdini_text').hide();
	
});

$('#reappear').click(function() {
  //WRITE CODE HERE
  $('#houdini_text').show();
});


// Problem 3 (Tickle Me Pink) -----------------------------------------------
// WRITE CODE HERE
$('#pinkify').click(function() {
	$('#tickled_text').css('color','pink');
});


// Problem 4 (Greet Me) -----------------------------------------------------
// WRITE CODE HERE
$('#greet').click(function() {
	alert('Hello ' + $('#my_name').val() + '!');
});
