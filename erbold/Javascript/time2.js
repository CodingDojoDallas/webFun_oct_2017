		var HOUR = 7;
		var MINUTE = 15;
		var PERIOD = "PM";

		var str = "It's ";

		if(MINUTE > 30){
			str += "almost " + (HOUR + 1)
		}else{
			str += "just after " + HOUR
		}

		if(PERIOD == "PM"){
			str += " in the evening."
		}else{
			str += " in the morning."
		}

		console.log(str)

		var str="It's";
		var HOUR=8;
		if(MINUTE == 15) {
			str +=" 15 after " + HOUR
		}

		if(PERIOD =="PM"){
			if(HOUR > 6){
				str +=" in the evening."
			}else{
				str +=" in the afternoon."
			}
		}

		console.log(str)
		