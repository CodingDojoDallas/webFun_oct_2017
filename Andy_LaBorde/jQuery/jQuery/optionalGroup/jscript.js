$(document).ready(function(){
	$('.box').hover(function(){
		$(this).css('background-color', random());
	}), $(this).css('background-color', random());
	$('button.b1').click(function(){
		$('.box').css('background-color', 'white');
	}),
	
	 $('button.b2').click(function(){
	 	setInterval(timer, 100);
	})
		function timer(){
			$('.box').each(function(){
				$(this).css('background-color', random());
		})

	
		

}
	function random(){
	var arr = ['red','orange', 'yellow', 'green', 'blue', 'purple', 'pink']
	// var arr = ['#ffffff','#345674', 'yellow', 'green', 'blue', 'purple', 'pink']
	var color = arr[Math.floor(Math.random()*7)]
	return color;
	}


});





