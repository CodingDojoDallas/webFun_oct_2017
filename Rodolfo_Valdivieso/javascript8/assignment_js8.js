var arrA=[1, 'apple', -3, 0.5];

console.log(onlyNumbers(arrA));

function onlyNumbers(arr){
	var arr2=[];
	for(var i=0;i<arr.length;i++){
		if (typeof arr[i] === 'number' ){
			arr2.push(arr[i]);
		}
	}
	return arr2;
}