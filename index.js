// call to .ready
// document is the name of the data structure
$(document).ready(function() {
  
  	// All JS code goes here!
  	// click is going inside the function
	// passing a function into a function
	$('.inline-code').on('click', function() {
	  $(this).html('it is a feminist place');
	});

	$('h3').on('mouseover', function() {
	  $(this).animate({
	    "letter-spacing": "10px",
	    "font-size": "40px"
	  }, 1000).animate({
	  	"letter-spacing": "5px",
	  	"font-size": "20px"
	  }, 1000);
	});
  
});