$(document).ready(function(){
	$('#jq1').click(function(){
		$('#test').css('color','red');
	});
	$('#jq2').click(function(){
		$('#p2').hide();
	});
	$('#jq3').click(function(){
		$('#p2').show();
	});
	$('#jq4').click(function(){
		$('#p4').toggle();
	});
	$('#jq5').click(function(){
		$('#meme').slideDown("slow");
	});
	$('#jq6').click(function(){
		$('#meme').slideUp("slow");
	});
	$('#jq7').click(function(){
		$('#p7').slideToggle("slow");
	});
	$('#jq8').click(function(){
		$('#p8').fadeIn();
	});
	$('#jq9').click(function(){
		$('#p8').fadeOut();
	});
	$('#jq10').click(function(){
		$('#p10').addClass('My Class Gold');
	});
	$('#jq11').click(function(){
		$('#p11').before("<p>Nailed It!!</p>");
	});
	$('#jq12').click(function(){
		$('#p12').after("<p>WOOT WOOT!!!</p>");
	});
	$('#jq13').click(function(){
		$('#p13').append("<p>King Kong aint got nothin on me!!!");
	});
	$('#jq14').click(function(){
		$('#p14').html("<b>Too Much Sauce</b>");
	});
	$('#jq15').click(function(){
		$('#p15').attr('id', 'andy');
	});
	$('#jq16').click(function(){
		$('#p16').val();
	});
	$('#jq17').click(function(){
		$('#p17').text();
	});
	$('#jq18').click(function(){
		$('#p18').data();
	});

});
