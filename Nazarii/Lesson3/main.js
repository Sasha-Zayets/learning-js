// Task 2

const toggleShowBlock = () => {
  const hideDiv = document.querySelector('.text-block');

  if (hideDiv.classList.contains('hide')) {
    hideDiv.classList.remove('hide');
  } else {
    hideDiv.classList.add('hide');
  }

};

const form = document.getElementById('send-form');

const inputN = document.querySelector('input[name="name"]');
const inputA = document.querySelector('input[name="age"]')

form.addEventListener('submit', (event) => {
  // Зупиняє стандартну поведінку
  event.preventDefault();

  const valueN = inputN.value;
  const valueA = inputA.value;

  if (valueN.length === 0 || valueA.length === 0) {
    alert('Enter correct data');
  } else if (valueA <= 20) {
    alert('You can be free!')
  } else {
    form.style.display="none";
    toggleShowBlock();
  }
});


// Task 1
/*
function act (a, b, typeOperation) {
  typeOperation = prompt('You can choose type operation(+, -, *, /).');

  if (typeOperation === '') {
   alert('Choose type operation!');
   return act();
 }

  a = Number(prompt('Enter value - a'));
  b = Number(prompt('Enter value - b'));


  if(typeOperation === '+') {
    alert(a + b);
  } else if (typeOperation === '-') {
    alert(a - b);
  } else if (typeOperation === '*') {
    alert(a * b);
  } else if (typeOperation === '/') {
    alert(a / b);
  }
}

act();
*/

