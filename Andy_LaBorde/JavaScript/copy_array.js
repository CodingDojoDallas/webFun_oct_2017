
function copy(arr){
	var newArr = []
	for(var i = 0; i < arr.length; i++){
		if(typeof arr[i] === "number"){
			newArr.push(arr[i]);
		}
	}
		console.log(newArr);
}
copy([1,3,5,'hello']);