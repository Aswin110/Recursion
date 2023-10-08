function fibs(n){
	let f = 0, s = 1;
	let arr = [];
	if(n < 0){
		console.log('enter a integer value greater than zero');
        return;
	}
	for(let i = 0; i < n; i++){
		arr.push(f);
		let c = f + s;
		f = s;
		s = c;
	}
	console.log(arr);
}

fibs(-1);

let f = 0, s = 1;
let arr = [];

function fibsRec(n){
	if(n === 0){
		console.log(arr);
	}else if(n < 0){
		console.log('enter a integer value greater than zero');
	}else{
		arr.push(f);
		let c = f + s;
		f = s;
		s = c;
		fibsRec(n-1);
	}
}
fibsRec(-1);