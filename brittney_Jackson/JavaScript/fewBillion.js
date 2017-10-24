function fewBill()
{
	var sum = 0.005;

	for(var i = 1; i<=30; i++){
		sum *= 2;
	}
	console.log(sum);
}
fewBill();

function fewBillion()
{
	var sum = 0.005;

	for(var i = 1; i<=30; i++){
		sum *= 2;
		if(sum > 10000 && sum <20000){
			console.log(i);
		}
	}
}
fewBillion();

function fewBillionMore()
{
	var sum = 0.005;

	for(var i = 1; i<=30; i++){
		sum *= 2;
		if(sum > 1000000 && sum <2000000){
			console.log(i);
		}
	}
}
fewBillionMore();

// function fewInfinite()
// {
// 	var sum = 0.05;

// 	for(var i = 1; i<=30; i++){
// 		sum *= 2;
// 		if(sum > 1000000 && sum <2000000){
// 			console.log(i);
// 		}
// 	}
// }
// fewInfinite();

