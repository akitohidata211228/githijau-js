// fizzbuzz.js
// Cetak 1-100; kelipatan 3 -> Fizz, 5 -> Buzz, 15 -> FizzBuzz.

for (let i = 1; i <= 100; i++) {
    let out = '';
    if (i % 3 === 0) out += 'Fizz';
    if (i % 5 === 0) out += 'Buzz';
    console.log(out || i);
}
