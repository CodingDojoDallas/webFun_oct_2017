var HOUR = 8;
var MINUTE = 35;
var PERIOD = "PM";

function clock(){
	var string = "It's "
	if(MINUTE > 30){
		string += `almost ${HOUR+1}`;
	}	else{
		string += "just after " + HOUR;
	}
	if(PERIOD == "AM"){
		string += " in the morning"
	}	else{
		string += " in the evening"
	}
	return string;	
}

var result = clock();
console.log(result);