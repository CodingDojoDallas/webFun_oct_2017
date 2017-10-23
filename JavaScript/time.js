function tellTime() {
	var HOUR = 1;
	var MINUTE = 20;
	var PERIOD = "PM";
	var str = "It's "

	if (HOUR == 12 && PERIOD == "AM" && MINUTE == 00){
		return str += HOUR + " midnight";
	} 
	if (HOUR == 12 && PERIOD == "PM" && MINUTE == 00){
		return str += HOUR + " noon"
	} 
	if (HOUR > 5 && PERIOD == "PM" & MINUTE == 00){
		return str += HOUR + " at night"
	}
	if (HOUR >= 1 && PERIOD == "PM" && MINUTE == 00){
		return str += HOUR + " in the afternoon"
	}
	if (MINUTE < 1){
		str += HOUR
	}
	else if (MINUTE == 15){
		str += "half past " + HOUR
	} 
	else if (MINUTE == 5){
		str += "5 after " + HOUR
	} 
	else if (MINUTE > 30){
		str += "almost " + (HOUR + 1)
	} 
	else if (MINUTE < 30){
		str += "just after " + HOUR
	}

	if (PERIOD == "AM"){
		str += " in the morning"
	}
	else {
		str += " in the evening"
	}
	return str;
}

var result = tellTime()
console.log(result);













	// if (MINUTE > 30){
	// 		str += "almost " + (HOUR + 1)
	// 		} else if (MINUTE < 30){
	// 			str += "just after " + HOUR
	// 		} if (PERIOD == "AM"){
	// 			str += " in the morning"
	// 		}else (str += " in the evening")