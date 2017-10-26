$(document).ready(function(){	

	$('img').click(function(){
		// stored the original src
		$(this).attr('temp',$(this).attr('src'));
		// overwrite the src with the data-alt
		$(this).attr('src',$(this).attr('data-alt'));
		// overwrite data-alt with temp
		$(this).attr('data-alt',$(this).attr('temp'));
	})
})

