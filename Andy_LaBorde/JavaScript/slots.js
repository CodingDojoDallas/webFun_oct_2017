function slots(qua){
	var won = Math.floor(Math.random()*50)+50+qua;
	var rand = Math.floor(Math.random()*10);

	for(var i = 1; i <= qua; i++){
		if(Math.floor(Math.random()*100) == rand){
			console.log(`WINNER!! You Won!!! $${won} coins`);
			return;

		}
		else{
			console.log('LOSER');
		}
	}
}
slots(100);