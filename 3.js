function countPositiveNumbers(a, b, c) {
  let count = 0;

  if (a > 0) {
    count++;
  } else if (b > 0) {
    count++;
  } else if (c > 0) {
    count++;
  }
  return count;
}
const a = Number(prompt("1: "));
const b = Number(prompt("2: "));
const c = Number(prompt("3: "));
console.log(countPositiveNumbers(a, b, c));