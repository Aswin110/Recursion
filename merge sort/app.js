function mergeSort (arr) {
	if (arr.length < 2){
		return arr;
	}
	let mid = Math.ceil(arr.length/2);
	let left = arr.slice(0, mid);
	let right = arr.slice(mid);
	let mergedCollection = merge(mergeSort(left), mergeSort(right));
	return mergedCollection;
    
}

function merge (left, right) {
	let sorted = [];
	while (left.length > 0 && right.length > 0){
		if (left[0] < right[0]){
			sorted.push(left.shift());
		}else{
			sorted.push(right.shift());
		}
	}
	return sorted.concat(left, right);
}
console.log('merge sort');
let data = mergeSort([8,3,1,42,4]);
console.log(data);