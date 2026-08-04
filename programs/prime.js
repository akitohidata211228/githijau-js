// prime.js
// Cari semua bilangan prima 1-100.

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

const primes = [];
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) primes.push(i);
}
console.log('Bilangan prima 1-100 (' + primes.length + ' buah):');
console.log(primes.join(', '));
