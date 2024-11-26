//function declaration

// let Mahasiswa = function (nama) {
//     return `Halo ${nama}`;
// }


// console.log(Mahasiswa('Edit Wiranto'));




// function expression


// let Mahasiswa = (nama) => {
//     return `Halo Selamat Siang ${nama}`;
// }

// console.log(Mahasiswa('Edit Wiranto'));


// let Mahasiswa = nama => `Halo ${nama}`;
// console.log(Mahasiswa('Edit Wiranto'));



// let Mahasiswa = (nama, umur) => `Halo ${nama}, Saya Umur ${umur}`;
// console.log(Mahasiswa('Edit Wiranto', 24));


let Mahasiswa = ['Edit Wiranto', 'William', 'Daeng'];

// let jumlahHuruf = Mahasiswa.map(function (nama) {
//     return nama.length;
// });

// console.log(jumlahHuruf);


let keterangan = Mahasiswa.map(nama => ({
    nama: nama,
    jumlahHuruf: nama.length
}));

console.table(keterangan)