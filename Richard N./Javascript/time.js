
var hour = 8;
var min = 10;
var per = "am"
var str = "It's ";

if(min > 30){
	str += "almost " + (hour + 1)
}else{
	str += "just after " + hour
}

if(per == "pm"){
	str += " in the evening."
}else{
	str += " in the morning."
}

console.log(str)
