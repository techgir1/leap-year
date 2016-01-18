$(document).ready(function() {
	$("form#leap").submit(function(event) {
	   var year = parseInt($("input#year").val());
	  
var leapYear = function(year) {
	return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0); 

};

$("#result").empty().append(year);
$("#answer").show();

	event.preventDefault();

  });
});
 
