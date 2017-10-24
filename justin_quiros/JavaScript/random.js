function slotMachine(quart, home){ 
	for(var i = 1; i <= quart; i++){
		if((Math.floor((Math.random()*100)+1) == 100)){
			quart = quart + Math.trunc(Math.random() * 50)+50;
			console.log("You are a winner! You now have " + quart + " coins!");
		}
		if(quart > home){
		console.log("You are going home with " + quart + " coins!");
		break;
		}
	}
}
slotMachine(100, 200)