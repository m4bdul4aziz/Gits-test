
# Test Problem Solfing

Repo ini dibuat untuk bertujuan untuk test penyelesaian masalah
yaitu


## 1. Weighted Strings

  - Menghitung bobot suatu string atau huruf dimana setia bobot huruf sudah di tentukan , misal: a = 1, b = 2, c = 3, ..., z = 26. 
  -  Queries digunakan untuk menentukan status dari angka di dalam queries dengan aturan:
      - Apabila angka di queries bernilai sama dengan bobot karakter/substring maka return Yes.
     - Apabila angka di queries bernilai beda dengan bobot karakter/substring maka return No.


## 2.Palindrome
- suatu kata, angka dan urutan yang bisa di baca secara bolak balik, dari kiri maupun kanan
- di fungsi ini saya buat untuk menentukan nilai palindrom terbesar atau Highest Palindrome! 

## 3. Balanced Bracket 
- menentukan sebuah string bracket apakah sudah berpasang pasangan , contoh {} [] ()
- Kopleksitas Kodingan di atas input
  - Kompleksitas waktu dari kode ini adalah O(n), di mana "n" adalah panjang string input "str", Ini berarti kode akan berjalan dengan efisien seiring dengan bertambahnya panjang string input

## Detail sebagai berikut 
- Perulangan String: untuk melooping sebanyak panjang string
- Operasi push dan pop pada variable stack, Saat karakter adalah tanda buka, kode melakukan operasi push ke dalam stack,  Saat karakter adalah tanda tutup, kode melakukan operasi pop dari stack

- pencocokan karakter : Kode ini memeriksa apakah karakter tanda tutup cocok dengan tanda buka yang sesuai menggunakan objek bracketPairs

- mereturn hasil : kode mengembalikan 'YES' jika stack kosong (semua tanda buka memiliki pasangan yang cocok) atau 'NO' jika tidak. 

Dipoint no 3 terdapat bebrapa cara dan kondisi

  - Saya menggunakan tumpukan (stack) untuk melacak tanda buka yang belum memiliki pasangan tanda tutup.

  - Saya menggunakan openingBrackets dan closingBrackets untuk menentukan karakter yang dianggap sebagai tanda buka dan tanda tutup.

  - Saya menggunakan objek bracketPairs untuk mencocokkan tanda buka dengan tanda tutup yang sesuai.

  - Saya melalui string input karakter demi karakter, dan jika karakter adalah tanda buka, kami tambahkan ke dalam stack. Jika karakter adalah tanda tutup, kami memeriksa apakah tanda tutup tersebut cocok dengan tanda buka terakhir dalam stack. Jika tidak cocok atau jika stack kosong, maka urutan tanda kurung tidak seimbang.

  - Setelah selesai memeriksa semua karakter, jika stack kosong, maka urutan tanda kurung adalah seimbang, dan jika tidak kosong, maka tidak seimbang.
 


## Requirement

- Node js
## Instalaltions

 - Download installer Node.js di halaman ini sesuai yang Anda butuhkan.
 - install node js di lokal atau di komputer
 
## Running file .js untuk melihat apakah berjalan dengan baik atau error

```node CLI
node weighted-strings.js
```

```node CLI
node highest-palindrome.js
```

```node CLI
node balanced-bracket.js
```


## Authors
- This application was built by.
  [@m4bdul4aziz](https://github.com/m4bdul4aziz)

