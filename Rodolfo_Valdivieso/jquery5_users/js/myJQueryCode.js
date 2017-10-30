
$(document).ready(function(){
		//all my jquery code goes here
		//inside the anonymous function
		 $('button').click(function(){

		 		var firstName;
		 		var lastName;
		 		var email;
		 		var phone;

		 		firstName=$( "#firstName" ).val();
		 		lastName =$( "#lastName"  ).val();
		 		email    =$( "#email"     ).val();
		 		phone    =$( "#phone"     ).val();


		 		$( "#tableHeader" ).after( "<div class='row' id='row' name='row'>   \
		 										<h1 class='row2'>"+firstName+"</h1> \
		 										<h1 class='row2'>"+lastName +"</h1> \
		 										<h1 class='row2'>"+email    +"</h1> \
		 										<h1 class='row2'>"+phone    +"</h1> \
		 									</div>" );
        });
})