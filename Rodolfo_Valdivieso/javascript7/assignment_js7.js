
game(5);

function game(number){
	var coins=0;
	var win=false;
	var win2=0;
	for (var i=1;i<=number;i++){
		win2=Math.floor((Math.random() * 10) + 1);
		if (win2==1) {
			win=true;
		}

		if (win) {
			coins = Math.floor(Math.random() * (50 + 1)) + 50;
			console.log('I won, and have a total of: '+ (i+coins) + ' quarters');
			break;
		}
	}
	if(!win){
		console.log('I lost all the money...');
	}
}