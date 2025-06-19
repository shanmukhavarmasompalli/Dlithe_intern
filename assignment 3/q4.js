//Take three numbers as input and display the largest number using if-else.
let a = 25, b = 42, c = 18;

if (a >= b && a >= c) {
    console.log("Largest is: " + a);
} else if (b >= a && b >= c) {
    console.log("Largest is: " + b);
} else {
    console.log("Largest is: " + c);
}
