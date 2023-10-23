/*Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in Functions) beserta
contoh penggunaannya(kecuali : split, reverse, join, foreach, map)
*/


/* 1. contoh method push =
menambah satu atau lebih elemen ke akhir sebuah array
.Elemen-elemen tersebut dituliskan sebagai parameter saat memanggil method
*/

// const x = ["ilham","albert","steveen",]
//     x.push("messi")
//     console.log(x)


/*2. contoh method pop =
adalah salah satu metode bawaan pada
 tipe data Array dalam JavaScript. Metode ini digunakan
  untuk menghapus elemen terakhir dari array dan mengembalikan elemen yang dihapus tersebut.
*/

// const x = ["ilham","albert","steveen"]
//     x.pop()
//     console.log(x)


/* 3. contoh method parseIn =
adalah salah satu metode bawaan pada JavaScript 
yang digunakan untuk mengonversi string menjadi bilangan bulat (integer)
 berdasarkan format angka tertentu.
 */


// const x = "999"
// const y = parseInt(x)
// console.log(y)


/*4. contoh method unShift =
digunakan untuk menambahkan sebuah elemen di bagian awal dari suatu array.
Kita bisa menambahkan satu elemen baru atau lebih dari satu elemen untuk array.
*/

// const x = ["ilham","albert","steveen"]
//     x.unshift("messi")
//     console.log(x)

/* 5. contoh method splice =
digunakan untuk menambahkan, menimpa (replace), dan menghapus element dalam array
*/
// const x = ["ilham","albert","steveen","messi"]
//     x.splice(2, 4)
//     console.log(x)



/* 6. contoh method concat =
digunakan untuk menggabungkan (atau menggabungkan)
dua atau lebih array dan menghasilkan array baru
yang berisi elemen-elemen dari array yang digabungkan. 
Metode ini tidak mengubah array asli, melainkan
 mengembalikan array baru yang merupakan hasil penggabungan
 */
// const x = ["ilham","albert","steveen","messi"]
// const y = ["ronaldo","mbappe","neymar","sane"]

// const combinned = x.concat(y)
// console.log(combinned)



/* 7. contoh method length =
digunakan untuk mengembalikan jumlah elemen 
dalam suatu objek atau struktur data tertentu.
 Metode ini umumnya digunakan pada tipe data seperti array, string, atau lainnya.
*/
// const x =["ilham","albert","steveen","messi"]
// const y = x.length
// console.log(y)


/* 8. contoh method toLowerCase =
adalah salah satu metode bawaan pada tipe data String dalam JavaScript.
 Metode ini digunakan untuk mengubah semua karakter dalam string menjadi huruf 
 */
// const x = "CRISTIANO RONALDO"
// const y = x.toLowerCase();
// console.log(y)


/* 9. contoh method charAt =
Definisi dan Penggunaan. charAt() metode ini mengembalikan karakter
 pada indeks tertentu dalam sebuah string. Indeks dari karakter pertama adalah 0,
 */
// const x = "cristiano ronaldo"
// console.log(x.charAt(4))


/* 10. contoh method indexOf =
Fungsi indexOf digunakan untuk mencari posisi (index) 
pertama suatu string dalam string yang lain.
*/
// const x = ["ilham","albert","steveen","messi"]
// console.log(x.indexOf('ilham'))
