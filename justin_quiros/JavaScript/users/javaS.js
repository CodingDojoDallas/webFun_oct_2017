$(document).ready(function(){
	
	$('#submit').click(function(){
	$('table').append('<tr><td>' + $('input[name="first_name"]').val()
		 + '<td>' + $('input[name="last_name"]').val()
		 + '<td>' + $('input[name="email"]').val()
		 + '<td>' + $('input[name="contact"]').val() + '</td></tr>');
	return false;
	});
});