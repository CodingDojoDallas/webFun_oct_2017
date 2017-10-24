function pringRange(x,y,z) {

	if( z == null){
		z = 1;
	}
	if (y == null) {
		x = temp;
		x = 0;
		y = temp;
	}
	for( var i = x; i < y; i += z){
		console.log(i);
	}
}
pringRange(-2,10);