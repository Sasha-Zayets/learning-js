const a = 10;
const b = 5;

const c = a + b;
const d = a - b;
const f = a * b;
const g = a / b;
const h = 'a' + '2';

const test = -a;

let numberA = 1;
// numberA = numberA + 1;
// numberA += 1;
// numberA++;

// numberA = numberA - 1;
// numberA -= 1;
// numberA--;
const numberB = numberA++;

console.log(`Text ${c}`);
console.log(d);
console.log(f);
console.log(g);
console.log(h);
console.log('Test: ', test);
console.log('NumberA: ', numberA);
console.log('NumberB: ', numberB);