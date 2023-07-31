function changeNumber(number) {
  if (number > 0) {
    number = number + 1;
  } else if (number < 0) {
    number = number - 2;
  } else {
    number = 10;
  }
  return number;
}
const number = Number(prompt("raqamni kiriting: "));
console.log(changeNumber(number));