function infinity(i) {
	var day = 1;
	var cash = 0.01;
	while(day < i)
	{
		cash = cash*2;
		day += 1;
	}

	console.log(cash);
}
infinity(30)

function till$10000(i) {
	var day = 1;
	var cash = 0.01;
	while(cash<i)
	{
		cash = cash*2;
		day += 1;
	}
	console.log(day);
}
till$10000(10000)

function till$billion(i) {
	var day = 1;
	var cash = 0.01;
	while(cash<i)
	{
		cash = cash*2;
		day += 1;
	}
	console.log(day);
}
till$billion(1000000000)

function till$infinity(i) {
	var day = 1;
	var cash = 0.01;
	while(cash<i)
	{
		cash = cash*2;
		day += 1;
	}
	console.log(day);
	console.log(cash);
}
till$infinity(Infinity)