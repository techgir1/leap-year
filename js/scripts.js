var leapYear = function(year) {
	if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) { 
		return true;
	  } else {
	  	return false;
	  }
};

$(document).ready(function() {
	$("form#leap").submit(function(event) {
	   var year = parseInt($("input#year").val());
	   var result = leapYear(year);

	   $(".year").text(year);

	   if(!result) {
	   	$ (".result2").text("not");
	   } else {
	   	$(".result2").text("");
       }
	   	$("#answer").show();
	  


$("#answer").show();

	event.preventDefault();

  });
});










 
