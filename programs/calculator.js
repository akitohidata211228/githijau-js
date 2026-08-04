// calculator.js
// Kalkulator dua angka (+, -, *, /).

function calculate(a, b, op) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : 'Error: pembagian nol';
        default: return 'Operasi tidak dikenal';
    }
}

console.log('7 + 3 =', calculate(7, 3, '+'));
console.log('7 - 3 =', calculate(7, 3, '-'));
console.log('7 * 3 =', calculate(7, 3, '*'));
console.log('7 / 3 =', calculate(7, 3, '/'));
