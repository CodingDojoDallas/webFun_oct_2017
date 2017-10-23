function tellTime() {	
	var hour = 12;
	var minute = 5;
	var period = "AM";
	var str = "It's "

	if(hour == 12 && minute == 0 && period == "AM"){
		return str += "midnight.";
	}
	if(hour == 12 &&  minute == 0 && period == "PM"){
		return str += "noon.";
	}

	if(minute > 0 && minute <= 5){
		str += "five after " + hour;
	}
	else if(minute >= 10 && minute <= 14){
		str += "ten after " + hour;
	}
	else if(minute >= 15 && minute <= 29){
		str += "a quarter after " + hour;
	}
	else if(minute >= 30 && minute < 45){
		str += "half past " + hour;
	}
	else if(minute >= 45 && minute < 50){
		if(hour + 1 > 12) {
			hour = 0;
			console.log("FIX THE PROBLEM");
		}
		str += "a quarter to " + (hour +1);
	}
	else if(minute >= 50){
		str += "ten to " + (hour + 1);
	}
	
	if(period == "AM"){
		str += " in the morning.";
	}
	else {
		str += " in the evening."; 	
	}
	return str;
}

var result = tellTime();
console.log(result);

