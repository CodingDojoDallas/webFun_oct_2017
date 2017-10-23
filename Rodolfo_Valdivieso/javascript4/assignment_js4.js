
kingTale();

function kingTale(){
	var days=0;
	var already=true;
	var reward=0.01;
	for (var i=0; i<30;i++){
		if (i==0){

		}else{
			reward = reward * 2;
		}
		if (reward>=10000 && already){
			days = i;
			already=false;
		}
		
	}

	console.log('After 30 days reward is: $'+reward);
	console.log('It took ' + (days+1) + ' to get more than $10.000 reward...');
}