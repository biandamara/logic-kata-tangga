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

tangga("foxie");
tangga("3oz4spoon")
tangga("087840")
