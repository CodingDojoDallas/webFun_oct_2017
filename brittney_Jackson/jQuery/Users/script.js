$(document).ready(function(){
	
	$('button').click(function(){
		$('table').append('<tr><td>'+ $('input[name="firstname"]').val()+'</td>'+ 
			'<td>'+ $('input[name="lastname"]').val()+'</td>'+
			'<td>'+ $('input[name="email"]').val()+'</td>'+
			'<td>'+ $('input[name="contact"]').val()+'</td></tr>');
			return false;
		
	})
	
});