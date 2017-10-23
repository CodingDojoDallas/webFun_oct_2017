function penny(){
	var money = .005;
	var day = 0;

	for(var i = 1; i <= 100000000; i++){
		money = money * 2;
		day++;
		if(money >= 10000  && money <= 20000){
			console.log("It took " + day + " days to reach $10k+")
		}
		if(day == 30){
			console.log("The servant made " + money + " at 30 days")
		}
		if(money >= 1000000000  && money <= 2000000000){
			console.log("It took " + day + " days to reach $1B+")
		}
	}
}

penny()

