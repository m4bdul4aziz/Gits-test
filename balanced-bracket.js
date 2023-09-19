function isBalancedBracket(str) {
    const stack = [];
    const bracketPairs = {
        '(': ')',
        '[': ']',
        '{': '}',
    };

    for (let char of str) {
        if (bracketPairs[char]) {
            // Jika karakter adalah tanda buka, tambahkan ke dalam stack
            stack.push(char);
        } else {
            // Jika karakter adalah tanda tutup
            const lastOpeningBracket = stack.pop();
          
            if (bracketPairs[lastOpeningBracket] !== char) {
                return 'NO'; // Tanda tutup tidak cocok dengan tanda buka
            }
        }
    }

    // Jika stack kosong, berarti semua tanda buka memiliki pasangan yang cocok
    return stack.length === 0 ? 'YES' : 'NO';
}

// Contoh penggunaan
console.log(isBalancedBracket('{[()]}{"}')); // Output: YES
// console.log(isBalancedBracket('{[(])}')); // Output: NO
// console.log(isBalancedBracket('{{[[(())]]}}')); // Output: YES
