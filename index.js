function tangga(kata) {
  // mulai loop dari panjang kata yang diberikan
  // setiap iterasi, kurangi 1 dari panjang kata
  for (let i = kata.length; i >= 0; i--) {
    // print spasi sebanyak panjang kata saat ini
    // lalu print bagian kata yang tersisa setelah dipotong dari depannya
    // setelah itu, balikkan kata tersebut
    console.log(" ".repeat(i) + kata.slice(0, kata.length - i).split("").reverse().join(""));
  }
  
  // setelah loop selesai, print kata yang diberikan
  console.log(kata);
}

// penggunaan variable argumen
tangga("foxie");
tangga("3oz4spoon");
tangga("087840");

/* Berikut adalah penjelasan langkah-langkah kode di atas:
1. Membuat sebuah function bernama tangga dengan parameter kata yang akan digunakan sebagai input dari function ini.
2. Memulai sebuah looping dengan variabel i sebagai counter. Looping akan dilakukan sebanyak panjang kata, lalu setiap iterasi akan mengurangi 1 dari panjang kata.
3. Pada setiap iterasi, cetak sebanyak i spasi ke console. Kemudian, cetak bagian kata yang tersisa setelah dipotong dari depannya, lalu balikkan kata tersebut.
4. Setelah looping selesai, cetak kata yang diberikan ke console.
5. Setelah function selesai dijalankan, maka akan muncul output yang diinginkan. */
