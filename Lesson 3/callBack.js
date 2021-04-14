/*
helloWord(10, function(age = 0) {
  console.log('callBack age ', age);
});

function helloWord(a = 0, callBack) {
  console.log('hello');

  callBack(a);
}
*/

// Рахує суму та передає в callBack числа a, b та sum
/*
function sum(a, b, callBack, callBack2) {
  const sum = a + b;

  console.log('Sum ', sum);
  callBack(sum);

  if (callBack2 !== undefined) {
    callBack2(sum);
  }
  
  return sum;
}

const dob = (sum) => {
  const result = sum * 2;

  console.log('Dob ', result);
};

const test = (sum) => {
  const result = sum / 2;

  console.log('Test ', result);
};

sum(2, 2, dob, test);
*/
/*
() => {} // Анонімна функція
function() {} // Анонімна функція

sum(1, 2, () => {

});

*/
/*

const button = document.querySelectorAll('.btn');

button.addEventListener('click', toggleShowBlock);
*/

const toggleShowBlock = () => {
  const hideDiv = document.querySelector('.text-block');
  
  if (!hideDiv) return;

  hideDiv.classList.remove('hide');
  hideDiv.innerHTML = `<h1>123123123</h1>`;
  
  return;
  if (hideDiv.classList.contains('hide')) {
    hideDiv.classList.remove('hide');
  } else {
    hideDiv.classList.add('hide');
  }

};

const form = document.getElementById('send-form');
const input = document.querySelector('input[name="name"]');

form.addEventListener('submit', (event) => {
  // Зупиняє стандартну поведінку
  event.preventDefault();

  const value = input.value;
  if (value.length === 0) {
    alert('Message');
  } else {
    toggleShowBlock();
  }
});


