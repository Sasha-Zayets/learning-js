
/**
 sum2 = function() {
  console.log('312');
};
*/

// ....
// sum();

/*
const sum2 = function() {
  console.log('123123123');
};

const sum3 = () => {
  console.log('Sum 3, 123123');
}

// sum2();
sum3();

function sum() {
  console.log('sum');
}

function prompt2(text = '') {
  return prompt(`${text}`)
}
*/
const getAge = () => {
  const result = prompt('Введіть вік:');
  if (result === '') {
    alert('Введіть коректне значення:');
    return getAge();
  }

  const age = Number(result);
  if (age > 20) {
    return age;
  } else {
    return 18;
  }
};

const name = getName();
const age = getAge();

const message = getMessage(name, age); 
alert(message);

function getMessage(name, age) {
  const result = prompt('Введіть 0 або 1');
  if (result === '0') {
    return `Ваше ім'я ${name}, вас буде видалено`;
  } else if (result === '1') {
    return `Ваш вік ${age}`;
  }

  return 'Ви ввели не коректні дані';
}

function getName() {
  const result = prompt(`Введіть ім'я:`);
  if (result === '') {
    alert('Введіть коректне значення:');
    return getName();
  } else {
    return result;
  }
}
