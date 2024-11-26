// object literal

// let mahasiswa = {
//     nama: 'Edit Wiranto',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan`);
//     }
// }


//function declaration

// const methodMahasiswa = {
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama},Selamat Makan`);
//     },

//     minum: function (haus) {
//         this.energi -= haus;
//         console.log(`Halo ${this.nama},Selamat Minum`);
//     },

//     tidur: function (jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, Selamat Tidur`);
//     }
// }

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
    


//     return mahasiswa;
// }

// const Edit = Mahasiswa('Edit Wiranto', 10);

// const Jonh = Mahasiswa('Jonh', 10);


//constructor function

// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama},Selamat Makan`);
//     }

//     this.minum = function (haus) {
//         this.energi -= haus;
//         console.log(`Halo ${this.nama},Selamat Minum`);
//     }
// }

// const Garing = new Mahasiswa('Garing', 30);

//protoype

function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;
}

Mahasiswa.prototype.makan = function (porsi) {
    this.energi += porsi;
    return `Halo ${this.nama} Selamat Makan, Energi Mu Sekarang Ada ${this.energi}`;
}

Mahasiswa.prototype.minum = function (haus) {
    this.energi -= haus;
    return `Halo ${this.nama} Selamat Minum, Energi Mu Sekarang Ada ${this.energi}`;

}

Mahasiswa.prototype.tidur = function(ngantuk){
    this.energi += ngantuk * 2;
     return `Halo ${this.nama} Selamat Tidur, Energi Mu Sekarang Ada ${this.energi}`;

}


const Edit = new Mahasiswa('Edit', 10);



class Situs{
    constructor(namaSitus, form) {
        this.namaSitus = namaSitus;
        this.form = form;
    }

    tahunBaru(event) {
        this.form += event;
        return `Halo ${this.namaSitus} Selamat Tahun Baru, Form mu Sekarang Ada ${this.form}`;
    }
}


const yowestogel = new Situs('yowestogel', 2000);









