
function endle$$(){

	var pennies = .01;
	var day10k = 0;
	var day1bil= 0;
	var dayInfini= 0;

	for(let i = 2; i <= 30; i++){
		pennies *= 2;
	}
	console.log(`after 30 days the servant's reward will be $${pennies}`);

	for (let i = .01; i < 10000; i*=2){
		day10k++;
	}
	console.log(`it took the servant ${day10k} to get $10,000`);
	
	for(let i = .01; i <= 1000000000; i *= 2){
		day1bil++;
	}
	console.log(`it took the servant ${day1bil} to get $1,000,000,000`);
	
	for(let i = 0.01; i < Infinity; i *= 2){
		dayInfini++;
	}
	console.log(`It took the servant ${dayInfini} to get $$$Infinity$$$!!`);	
}
endle$$();





