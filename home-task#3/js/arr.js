//операції над масивом чисел
const arrNum = [];
const countNum = 50;
const sumNum = 0;

/**
 count - введіть число для обробки

 num - вивід масиву на базі данних count
 sum - вивід суми чисел масиву на базі данних count
 */
function createArrNum(count = 0, arr = [], sum = 0) {
  for (let i = 0; i <= count; i++) {
    arr.push(i);
    sum += i;
  }

  return {arr, sum}
}

console.log(createArrNum(countNum, arrNum, sumNum))

//застосування методу фільтр до масиву
const arrElm = [5, 10, 11, 25, 3, 2, 1, 8, 9,]
const filterParams = 5;

const filterArrElm = arrElm.filter((item) => item > filterParams)

console.log(filterArrElm)

