

function countdown(daysLeft){
	var str = " days until my birthday, "
	// console.log(daysLeft)
	while(daysLeft >= 0){
		if(daysLeft === 0){
			console.log("ITS MY BIRTHDAY!!!!");
			return;
		}
		if(daysLeft >30){
			console.log(`${daysLeft} ${str} too long to wait...`)
					}
		if(daysLeft <= 30 && daysLeft > 5){
			console.log(`${daysLeft} ${str} birthday month :)`);
		}
		if(daysLeft <= 5 && daysLeft> 0) {
			console.log(`${daysLeft} ${str} almost there!`);
			
		}
		daysLeft--;
	}
}
countdown(40);