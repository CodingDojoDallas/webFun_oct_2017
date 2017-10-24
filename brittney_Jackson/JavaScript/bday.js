function myBday()
{
	for(var i=223; i>=0; i--){
		if(i>30){
			console.log(i + " days until my birthday, but no rush :/");
		}
		else if(i>5){
			console.log(i + " days until my birthday...NOOOOOO!");
		}
		else if(i>0){
			console.log(i + " DAYS UNTIL MY BIRTHDAY...I DONT WANNA BE OLDER...WAAAHHHH");
		}
		else if(i=0){
			console.log("Happy birthday to me. throws Party for self bleh");
		}
	}
}
myBday();