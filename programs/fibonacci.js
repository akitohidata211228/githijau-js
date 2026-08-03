// fibonacci.js
// Deret Fibonacci: 15 suku pertama.

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const terms = 15;
const sequence = [];
for (let i = 0; i < terms; i++) sequence.push(fibonacci(i));
console.log('Fibonacci (' + terms + ' suku):');
console.log(sequence.join(', '));
