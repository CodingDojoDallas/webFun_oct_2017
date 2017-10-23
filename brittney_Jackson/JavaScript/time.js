function time()
{
	var HOUR = 10;
	var MINUTE = 45;
	var PERIOD = "PM";
	var str = " ";

	if(HOUR == 12 && MINUTE == 00 && PERIOD == "AM"){
		return str="It's Midnight!";
	}

	if(HOUR == 12 && MINUTE == 00 && PERIOD == "PM"){
		return str="It's Noon!";
	}


	if(MINUTE > 30){
		HOUR++;
		str = "It's almost " + HOUR;
	}
	else if(MINUTE == 00){
		str = "It's "+HOUR;
	}
	else if(MINUTE == 05){
		str = "It's 5 after "+HOUR;
	}
	else if(MINUTE == 15){
		str = "It's quarter after "+HOUR;
	}
	else if(MINUTE < 30){
		str = "It's just after " +HOUR;
	}
	else if(MINUTE == 30){
		str = "It's half past " +HOUR;
	}

	if(PERIOD == "AM"){
		return str += " in the morning!";
	}
	else if(PERIOD =="PM" && HOUR<5){
		return str += " in the afternoon!";
	}
	else if(PERIOD =="PM" && HOUR<9){
		return str += " in the evening!";
	}
	else if(PERIOD =="PM" && HOUR>=9){
		return str += " at night!";
	}

}
var RESULT = time();
console.log(RESULT);
time();