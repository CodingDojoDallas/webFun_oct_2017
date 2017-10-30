$(document).ready(function(){
		//all my jquery code goes here
		//inside the anonymous function
		 $('button').click(function(){
		 	//create the box 
		 	    var firstName;
		 		var lastName;
		 		var description;
		 	
		 		firstName      =$( "#firstName" ).val();
		 		lastName       =$( "#lastName"  ).val();
		 		description    =$( "#description").val();
		 		
		 	$( "#users" ).append( "<div class='box' id='box' name='box'>   \
		 										<h1 class='boxItem'>"+firstName+' '+lastName +"</h1> \
		 										<h1 class='boxItem'>Click for description!</h1> \
		 										<p class='boxItem' on='0' style='display: none;' >"+description+"</p> \
		 									</div>" );
        });

        $(document).on('click', '.box', function(){
         	var on = $(this).attr('on');
         	console.log($(this).attr('on'));
         	if(on==0){
         		$(this).attr('on', '1');
         		$(this).children('p').show();
         		$(this).children('h1').hide();
         	}
         	else{
         		$(this).attr('on', '0');
         		$(this).children('p').hide();
         		$(this).children('h1').show();
         	}
     });
})