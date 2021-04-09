let a = 0
let b = 0
let task;
//only for
document.getElementById('1').addEventListener('click', function () {
  task = prompt('Enter Num: ', '');
  for (let i = 0; i <= Number(task); i++) {
    let a =+ i;
    console.log(a)
  }
})
//sum
document.getElementById('2').addEventListener('click', function () {
  task = prompt('Enter Num: ', '');
  for (let i = 0; i <= Number(task); i++) {
    a += i
    console.log(a)
  }
})
//task 3
document.getElementById('3').addEventListener('click', function () {
  task = prompt('Enter age: ', '',);
  if (!task) alert('Поле не може бути пустим! Введіть дані')
  else if (task < 14) alert('У Вас доступ Basic')
  else if (task >= 14 && task <= 16) alert('У Вас доступ Testing')
  else if (task >= 17 && task <= 20) alert('У Вас доступ Ultimate')
  else if (task >= 21 && task <= 70) alert('У Вас доступ Gold')
  else if (task > 70) alert('Доступ заблокований')
})
