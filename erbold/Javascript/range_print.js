function printRange(x,y,z){

	for(var range=x;range<y;range++){
		if (range==z) {
			continue;
		}
		else{ console.log(range);
		}
	}}	

	printRange(10,30,20)