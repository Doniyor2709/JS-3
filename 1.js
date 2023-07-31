function increaseNumber(number) {
  if (number >= 0) {
    number = number + 1;
  }
  return number;
}
const number = Number(prompt("raqamni kiriting: "));
console.log(increaseNumber(number));