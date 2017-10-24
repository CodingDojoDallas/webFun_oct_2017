var daysUntilBday = 60;

function bday_countdown(){
	while(daysUntilBday >= 0){
		if(daysUntilBday === 0){
			console.log("ITS MY BIRTHDAY!!!");
			return;
		}
		if(daysUntilBday <= 5){
			console.log(`${daysUntilBday} left, its almost here!!!`)
		}
		else if(daysUntilBday <=30){
			console.log(`${daysUntilBday} left, I cant wait.`)
		}
		else if(daysUntilBday > 30){
			console.log(`${daysUntilBday} until I can be happy.`)
		}
		daysUntilBday--;
	}
}

bday_countdown();