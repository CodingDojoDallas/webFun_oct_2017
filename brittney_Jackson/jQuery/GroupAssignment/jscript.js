$(document).ready(function(){
	var power = false;
	var x;
	$('.box').hover(function(){
		$(this).css('background-color', random());
	}), $(this).css('background-color', random());
	$('button.b1').click(function(){
		$('.box').css('background-color', 'white');
	}),
	$('button.b2').click(function(){
		if (power === false) {
		 	x = interval();
		 	power = true;
		} else {
		 	clearInterval(x);
		 	console.log('x after: ', x);
		 	power = false;
		}
	 })
});

function interval() {
	return setInterval(timer, 100);
}

// // $('button.b2').click(function(){
// //  		clearInterval(timer);

// })$('button.b2').click(function(){
 		// clearInterval(timer);
 

// function interval(){
// 	var setIt =setInterval(timer, 100);
// }

function timer(){
	$('.box').each(function(){
		$(this).css('background-color', random());
	});
} 

function random(){
	var arr = ['red','orange', 'yellow', 'green', 'blue', 'purple', 'pink']
	// var arr = ['#ffffff','#345674', 'yellow', 'green', 'blue', 'purple', 'pink']
	var color = arr[Math.floor(Math.random()*7)]
	return color;
}





