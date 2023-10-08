function fibs(n){
	let f = 0, s = 1;
	let arr = [];
	for(let i = 0; i < n; i++){
		arr.push(f);
		let c = f + s;
		f = s;
		s = c;
	}
	console.log(arr);
}

fibs(10);

let f = 0, s = 1;
let arr = [];

function fibsRec(n){
	if(n < 1){
		console.log(arr);
	}else{
		arr.push(f);
		let c = f + s;
		f = s;
		s = c;
		fibsRec(n-1);
	}
}
fibsRec(0);