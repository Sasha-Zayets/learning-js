// const one = prompt('One number');
// const two = prompt('Two number');

// sumNumbers(Number(one), Number(two));
// sumNumbers();


// functions list
// function sumNumbers(a = 0, b = 0) {
  // const oneNumber = a || 0;
  // const oneNumber = a ?? 0;
  /*
  if (a === undefined) {
    a = 0;
  }
  */
  // console.log(a + b);
// }

/*
function arraySum(a, b, ...numbers) {
  console.log(numbers);
}

arraySum(1, 2, 3, 4, 5, '123123');
*/

function numbersSum(a, b, c = false) {
  if (c) {
    return a * b;
  }
  
  return a + b;
}


const sum = numbersSum(2, 2, true);
console.log(sum);