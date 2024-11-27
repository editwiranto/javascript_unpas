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


// let Mahasiswa = ['Edit Wiranto', 'William', 'Daeng'];

// let jumlahHuruf = Mahasiswa.map(function (nama) {
//     return nama.length;
// });

// console.log(jumlahHuruf);


// let keterangan = Mahasiswa.map(nama => ({
//     nama: nama,
//     jumlahHuruf: nama.length
// }));

// console.table(keterangan)

// function expression

// let mahasiswa = function () {
//     this.nama = "Edit Wiranto";
//     this.umur = 24;
//     this.sayHello = function () {
//         console.log(`Halo nama saya ${this.nama}, Saya umur ${this.umur}`);
//     }
// }

// const edit = new mahasiswa();

// let mahasiswa = function () {
//     this.nama = "Edit Wiranto";
//     this.umur = 24;
//     this.sayHello = function () {
//         console.log(`Hello nama saya ${this.nama},Saya umur ${this.umur}`);
//     }


//     setInterval(() => {
//         console.log(this.umur++);
//     },500);
// }

// let edit = new mahasiswa();


const box = document.querySelector('.box');

box.addEventListener('click', function () {
    
    let satu = 'size';
    let dua = 'caption';

    if (box.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);


    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600)
    
});