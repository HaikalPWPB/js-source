// var p = document.getElementsByTagName('p')[0];

// console.log(p);

//Membuat elemen html p
var p = document.createElement('p');
p.innerHTML = 'Hello World!'; // masukkan isi konten hello world
document.body.appendChild(p); // tambahkan p di akhir body

// Cari terlebih dahulu induk yang membungkus p tersebut
var body = document.getElementsByTagName('body')[0];
body.removeChild(p); // lalu hapus p yang telah tadi dibuat

// var p2 = document.createElement('p');
// p2.innerHTML = 'Hello Indonesia';
// document.body.appendChild(p2);

// document.removeChild(p2);

