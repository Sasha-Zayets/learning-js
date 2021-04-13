let age = prompt('Enter your value:');
let ageNumber = Number(age);

if (Number(age) < 14) {
  alert('You are having BASIC access');
} else if (Number(age) >= 14 && Number(age) <= 16) {
  alert('You are having TEST access');
} else if (Number(age) >= 17 && Number(age) <= 20) {
  alert('You are having ULTIMATE access');
} else if (Number(age) >= 21 && Number(age) <= 70) {
  alert('You are having GOLD access');
} else if (Number(age) > 70) {
  alert('Access is denied !');
}

// Access by age
