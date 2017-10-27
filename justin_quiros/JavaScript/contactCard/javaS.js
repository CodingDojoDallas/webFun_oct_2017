$(document).ready(function(){
	$("button").click(function(){
		var first = $("#first_name").val();
		var last = $("#last_name").val();
		var info = $("textarea").val();
		$("#right").append("<div id = 'card'><p>" + first + " " + last+"</p><p id = 'back'> " + info +"</p></div>");
		$("#first").val("");
		$("#last").val("");
		$("#info").val("");
		return false;
	});
	
	$(document).on('click', '#card', function(){
		$(this).children().toggle();
	});
});