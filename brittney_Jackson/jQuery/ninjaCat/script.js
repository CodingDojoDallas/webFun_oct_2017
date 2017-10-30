$(document).ready(function(){
	$('img').click(function(){
		// $(this).hide();
		var altImg = $(this).attr('altImg');
		var temp = $(this).attr('src');
		$(this).attr('src', altImg);
		$(this).attr('altImg', temp);



	})


	
});
	

