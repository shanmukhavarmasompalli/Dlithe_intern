//Find the sum of digits of a number using a while loop.
let num = 456;
let sum = 0;
while (num !== 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
}
console.log("Sum of digits:", sum);
