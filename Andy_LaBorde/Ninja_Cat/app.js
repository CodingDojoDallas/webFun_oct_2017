$(document).ready(function(){
	$('img').click(function(){
		var ninja = $(this).attr('altImg')
		console.log(ninja)
		var cat = $(this).attr('src')
		console.log(cat)
		$(this).attr('altImg', cat)
		$(this).attr('src', ninja)
	});	
});


