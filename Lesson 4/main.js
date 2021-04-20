// const arr2 = [];
// arr2[0] = 0;
// arr2[100] = '10';

// console.log(arr2);
// console.log(arr2[0], arr2[10]);

// Method Push
/*
arr2.push('Method push');
arr2.push('Method push');
arr2.push('Method push');

console.log(arr2);
*/

// function createArrayNumbers() {}
const createArrayNumbers = (lengthArray = 0) => {
  const numbers = [];

  if (typeof lengthArray === 'string') {
    return numbers;
  }

  for (let i = 0; i <= lengthArray; i++) {
    // numbers[i] = i;
    numbers.push(i);
  }

  return numbers;
};

// const resultNumbers = createArrayNumbers('10');
// console.log(resultNumbers);


/* Methods Shift, Pop, unshift */

// const names = ['Test'];
// names.unshift('Name');

// console.log(names);

// names.shift();
// names.pop();

// console.log('Method Shift', names);

const arr = ["Яблуко", "Апельсин", "Груша"];
// For 
/*
for (let index = 0; index < arr.length; index++) {
  const item = arr[index];
  if (item === 'Апельсин') {
    console.log(index, item);
  }
}
*/

// const sum = () => a + a;

const sum = (a) => {
  return a + a;
};

// Method Find, FindIndex, IndexOf
const findValue = 2;

/*
const findElement = arr.find((item, index) => {
  if (index === findValue) {
    return true;
  }

  return false;
});

const findElement = arr.find((item) => index === findValue);
*/

const findElement = arr
  .findIndex((item) => item === 'Яблуко2');

const getIndex = arr.indexOf('Яблуко2');

// Methods Filter
const products = [100, 200, 300, 60, 10, 20];

const filterProducts = products
  .filter((item, index) => item >= 100 || item === 10);

// console.log(filterProducts);
  
/* Methods Map
const customProducts = products.map((item, index) => {
  if (item >= 100) {
    return item - 10;
  }

  return item;
});
*/

const customProducts = products.map((item) => item - 10);

customProducts.forEach((item, index) => {
  if (item > 50) {
    console.log('33123123123', item);
  } else {
    console.log('123123123', item);
  }
});
