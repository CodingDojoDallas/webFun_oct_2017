
time(7, 15, 'PM');
time(8, 50, 'AM');
time(1, 31, 'PM');

function time(Hour1, Minute1, Period1){
	if (Hour1==8 && Minute1==50 && Period1=="AM") {
		console.log("It's almost 9 in the morning");
	}
	else if (Hour1==7 && Minute1==15 && Period1=="PM") {
		console.log("It's just after 7 in the evening");
	}
	else{
		console.log("Current time is: " + Hour1 +':'+Minute1+' '+Period1);
	}
}

