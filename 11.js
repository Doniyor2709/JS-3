let a = 10;
let b = -5;
let c = 0;

let positiveCount = 0;
let negativeCount = 0;

 if (a > 0) {
   positiveCount++;
} else if (a < 0) {
 negativeCount++;
 }

if (b > 0) {
 positiveCount++;
} else if (b < 0) {
 negativeCount++;
 }

  if (c > 0) {
    positiveCount++;
   } else if (c < 0) {
   negativeCount++;
 }

 console.log(positiveCount);
 console.log(negativeCount);