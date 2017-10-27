
$(document).ready(function(){


	$('form').submit(function(){
		let firstName = $('#firstName').val();
		let lastname = $('#lastname').val();
		let email = $('#email').val();
		let contact = $('#contact').val();

		let html_str = '';
		html_str +=	'<tr>'
		html_str +=		`<td>${firstName}</td>`
		html_str +=		`<td>${lastname}</td>`
		html_str +=		`<td>${email}</td>`
		html_str += 	`<td>${contact}</td>`
		html_str += '</tr>'
		$('table').append(html_str);
		return false;		

	
		})
		
	});

	// $('form').val(function(){
		
	// });
		
	


	
