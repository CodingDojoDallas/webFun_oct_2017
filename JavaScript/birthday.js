function birthday(){
	var daysUntilMyBirthday = 60;

	for(var i = daysUntilMyBirthday; i >= 0; i--){
		if(i > 30){
		console.log(i + " days until my birthday. Such a long time... :(")
		}
	else if(i < 30 && i > 5){
	console.log(i + " days until my birthday. We are getting closer... :)")
		}
	else if(i < 5 && i >= 1){
		console.log(i + " days until my birthday!!!")
		}
	else if(i == 0){
		console.log("Today is my birthday!!!!!");
		}
	}
}

birthday()