//Print the Fibonacci series up to n terms using a loop.
let n = 10;
let a = 0, b = 1;
console.log("Fibonacci Series:");
for (let i = 1; i <= n; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
}
