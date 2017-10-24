function onlyNum(arr)
{
	var newArr =[];

	for(var i=0;i<arr.length;i++){
		if(typeof arr[i] === "number"){
			newArr.push(arr[i]);
		}
	}
	console.log(newArr);
}
onlyNum([1,'yesterday',7, true, 5]);