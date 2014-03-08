// Problem 2 (Peekaboo) ------------------------------------------------------
// WRITE CODE HERE
$('#toggle_img').click(function() {

	if ($('#toggle_img').text() == "Go Away!")	
	{	
		$('#main_img').hide();
		$('#toggle_img').text("Come Back!");
	}	
	else if ($('#toggle_img').text() == "Come Back!")	
	{
		$('#main_img').show();
		$('#toggle_img').text("Go Away!");	
	}
});

// Problem 3 (Swap Em) -----------------------------------------------
// WRITE CODE HERE
$('#change_img').click(function() {

	$('#main_img').attr("src", ("/static/img/" + $('#new_img_file').val()));

});

// Problem 4 (Find the Source) -------------------------------------------------
$('.clickable').click(function() {
  
  alert($(this).attr("src"));

});

// Problem 5 (Imgrr) -------------------------------------------------
$('.swappable').click(function() {

	$('#big_img').attr("src", ($(this).attr("src")));


});
