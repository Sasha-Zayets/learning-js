/ Task 1
/*
const arr = [];

for (let i = 0; i <= 100; i++) {
	arr.push(i);
}

console.log(arr);
*/

//Task 2

/*
const arr = [];

function arraySum(array) {
	let sum = 0;
	for (let i = 0; i < 100; i++) {
      arr.push(i);
			sum += array[i];
	}
	return sum;
}
console.log(arraySum(arr));
*/

// Task 3

const arr = [];

for (let i = 0; i < 20; i++) {
	arr.push(i);
}

console.log(arr);

const filterProducts =  arr.filter((item, index) => item >= 5);

console.log(filterProducts);

