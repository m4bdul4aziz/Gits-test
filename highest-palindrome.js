function findHighestPalindrome(string, k) {
    if (k < 0) {
        return -1; // Jika k negatif, tidak mungkin menemukan palindrom
    }

    const n = string.length;

    // Kasus dasar: string kosong atau hanya satu karakter
    if (n <= 1) {
        return string;
    }

    // Bandingkan karakter pertama dan terakhir
    if (string[0] !== string[n - 1]) {
        // Cari karakter yang lebih besar
        const maxChar = Math.max(string[0], string[n - 1]);
        
        // Gantilah karakter pertama dan terakhir dengan karakter yang lebih besar
        string = maxChar + string.slice(1, n - 1) + maxChar;

        // Kurangi k karena kita melakukan satu penggantian
        k--;
    }

    // Rekursi dengan substring tanpa karakter pertama dan terakhir
    const innerPalindrome = findHighestPalindrome(string.slice(1, n - 1), k);

    if (innerPalindrome == -1) {
        return -1; // Tidak mungkin menemukan palindrom dalam substring
    }

    // Gabungkan karakter pertama, palindrom dalam substring, dan karakter terakhir
    return string[0] + innerPalindrome + string[n - 1];
}

// Contoh penggunaan
const string = "3943";
const k = 1;
const result = findHighestPalindrome(string, k);

if (result == -1) {
    console.log("-1"); 
} else {
    console.log(result);
}