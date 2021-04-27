const user = {
  name: 'John',
  age: 36,
  is_payment: false,
};

const array = {
  length: 10,
  map: function(name) {
    return name;
  }
};

array.is_payment = true;


const person = {
  name: 'Person',
};
// const person2 = Object.assign({}, person);
const person2 = {
  ...person,
  age: 30,
};

const age = 'age';
// console.log(person2[age]);
// console.log(person2['age']);
// console.log(person2.age);

/*
for (const key in person2) {
  console.log(key, ': ', person2[key]);
}

const keys = Object.keys(person2);
keys.forEach(key => console.log(key, ': ', person2[key]));
console.log(keys);

Object.keys(person2).forEach(key => console.log(key, ': ', person2[key]));
*/
