let a = 0; // Парні числа
let b = 0; // Не парні числа

/*
for (let i = 0; i <= 2; i++) {
  if (i % 2 === 0) {
    // Парне число
    // a += i;
    a = a + i;
    console.log('a + ', i);
  } else {
    // Не парне число
    b += i;
    console.log('b + ', i);
  }
}
*/

for (let i = 0; i > -1; i++) {
  if (i < 3) {
    continue;
  }
  console.log('i = ', i);

  if (i > 10) {
    break;
  }
}


//
console.log(a, b);

let i = 0;
while (i < 5) {
  // console.log(i);

  i++;
}

i = 0;
do {
  console.log(i);
} while (i < 0);