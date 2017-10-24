function printRange(start, end, skip){
	for(var i = start; i < end; i += skip){
		console.log(i)
	}
}

printRange(6,10,1)



function bonus(start, end, skip){
	if(!end){
		end = start;
		start = 0
		skip = 1;
	}
	if(!skip){
		skip = 1
	}
	for(var i = start; i < end; i += skip){
		console.log(i);
	}
}
bonus(7)