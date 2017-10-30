
$(document).ready(function(){
		//all my jquery code goes here
		//inside the anonymous function
		 $('img').click(function(){
		 		//store the value of src-alt on an var
		 		var newSource = $(this).attr('alt-src');  //alte-src
		 		var oldSource = $(this).attr('src');  //current src

		 		$(this).attr('src', newSource);
		 		$(this).attr('alt-src', oldSource);

        });

})