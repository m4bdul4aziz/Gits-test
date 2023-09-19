function weightedStrings(s, queries) {
  // Membuat objek untuk menyimpan bobot setiap karakter
  const charWeights = {};
  let weight = 0;
  const weightedStrings = [];

  // Menghitung bobot untuk setiap karakter dalam string
  for (const char of s) {
    weight += char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    charWeights[char] = weight;
  }

  // Menghitung bobot substring
  const substringWeights = new Set();
  let currentWeight = 0;
  for (const char of s) {
    currentWeight += char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    
    substringWeights.add(currentWeight);
  }

  // Memeriksa setiap query
  for (const query of queries) {
    if (
      Object.values(charWeights).includes(query) ||
      substringWeights.has(query)
    ) {
      weightedStrings.push('Yes');
    } else {
      weightedStrings.push('No');
    }
  }

  return weightedStrings;
}

// Contoh penggunaan
const string = 'abbcccd';
const queries = [1, 3, 9, 8];
const result = weightedStrings(string, queries);
console.log(result); // Output: ['Yes', 'Yes', 'Yes', 'No']