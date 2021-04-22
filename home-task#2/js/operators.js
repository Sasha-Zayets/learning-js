document.getElementById('1').addEventListener('click', () => {
  //вихідні параметри
  let a;
  let b;
  let operator;
//валідація даних
  const firstNumber = () => {
    a = Number(prompt('Веддіть число а:'))
    if (!a || !/^[0-9]+$/.test(a)) {
      alert('Поле повинно містити числа')
      firstNumber();
    }
    return a;
  }

  const secondNumber = () => {
    b = Number(prompt('Веддіть число b:'))
    if (!b || !/^[0-9]+$/.test(b)) {
      alert('Поле повинно містити числа')
      secondNumber();
    }
    return b;
  }

  const operation = () => {
    operator = prompt('Оберіть операцію для обробки чисел "+" "-" "*" "/":')
    if (!operator || !/^[+ \- * /]+$/.test(operator)) {
      alert('Поле повинно містити оператор "+" "-" "*" "/"')
      operation();
    }
    return operator;
  }

//функціонал
  function typeOperation(a, b, c) {
    let result = 0;

    switch (c) {
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      case '*':
        result = a * b;
        break;
      case '/':
        result = a / b;
        break;
      default:
        break;
    }
    return alert(`Результат:  ${result}`)
  }

  typeOperation(firstNumber(), secondNumber(), operation())
})