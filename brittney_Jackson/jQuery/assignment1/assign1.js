$(document).ready(function(){

	$('#click').click(function(){
		alert('CONGRATS! You won...just kidding. You successfully clicked a button - Dassit');
	})

	$('#hide').click(function(){
		$('#hideimg').hide();
	})

	$('#show').click(function(){
		$('#hideimg').show();
	})

	$('#toggle').click(function(){
		$('#toggleimg').toggle();
	})

	$('#fadeinimg').hide();

	$('#fadein').click(function(){
		$('#fadeinimg').fadeIn();
	})

	$('#fadeout').click(function(){
		$('#fadeoutimg').fadeOut();
	})

	$('#slided').click(function(){
		$('#slidedimg').slideDown();
	})

	$('#slideu').click(function(){
		$('#slideuimg').slideUp();
	})

	$('#slidet').click(function(){
		$('#slidetimg').slideToggle();
	})

	$('#class').click(function(){
		$('.pclass').addClass('.info p');
	})//help me jesus this is wrong

	$('#before').click(function(){
		$('span.before').before('<b><i>right</i></b> ');
	})

	$('#after').click(function(){
		$('span.after').after('<b><i> or right after</i></b> ');
	})

	$('#append').click(function(){
		$('span.append').append('<b><i> CODY!!! </b></i>');
	})

	$('#html').click(function(){
		alert("See:" + $("#htmll").html())
		alert("See how the HTML tag was revealed? Thats what this function does :)");
	});

	$('#attr').click(function(){
		alert($('#link').attr("href"));
	})

	$('#val').click(function(){
		alert("Value: "+ $("#valtest").val())
	})

	// $('#text').click(function(){
	// 	alert("Text: " + $("#test").text());
	// })

	// $('#data').click(function(){
	// 	$('#').something();
	// })

})
