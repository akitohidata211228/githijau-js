// palindrome.js
// Cek apakah sebuah kata/kalimat merupakan palindrom.

function isPalindrome(text) {
    const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

const samples = ['Racecar', 'Hello', 'Kasur ini rusak'];
for (const s of samples) {
    console.log('"' + s + '" -> ' + (isPalindrome(s) ? 'palindrom' : 'bukan'));
}
