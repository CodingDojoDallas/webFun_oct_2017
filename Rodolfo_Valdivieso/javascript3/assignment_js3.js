

myBirthday(20);

function myBirthday(days){

	if (days==0) {
		//today is my BDay
		console.log('Today Is My BirthDay!!!!!');
	}
	else{

		for (var i=days; i>=0; i--){
			if(i>=30) 
			{	
				//loga sad message and i days
				console.log(i + ' days until my birthday. Such a long time... :(');
			}
			else if (i<30 && i>5) {
				//log close and days
				console.log(i + ' days until my birthday. Getting Closer... :(');
			}
			else if (i<=5 && i>0){
				//scream IT
				console.log(i + ' days until my birthday. ALMOST THERE!!!!');

			}
			else{
				//tofay is my B Day
				console.log('Today Is My BirthDay!!!!! YEAHHHHHH');
				console.log('♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*');
				console.log('♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪');
				console.log('*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«');
					
			}
		}
		/*console.log('i: ' +i);
		console.log('bday: ' +bday);*/

	}
}