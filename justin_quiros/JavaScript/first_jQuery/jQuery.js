$(document).ready(function(){

	$('#but1').click(function(){
		console.log('clicked the button')
	})

	$('#but2').click(function(){
		$('#h42').hide();	
	})

	$("#but3").click(function(){
  		$( "#h43" ).show('fast');
  	})

  	$('#but4').click(function(){
  		$('#h44').toggle('slow');
  	})

  	$('#but5').click(function(){
  		$('#h45').fadeIn('slow');
  	})

  	$('#but6').click(function(){
  		$('#h46').fadeOut('slow');
  	})

  	$('#but7').click(function(){
  		$('#h47').slideDown('fast');
  	})

  	$('#but8').click(function(){
  		$('#h48').append(' Not anymore!  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod');
  	})

})