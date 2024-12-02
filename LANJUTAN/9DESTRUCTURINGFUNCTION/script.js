//destructuring function


// function kalkulasi(a, b) {
//     return [a + b, a * b,a / b, a - b];
// }

// const [jumlah, perkalian, pembagian, pengurangan] = kalkulasi(2, 3);
// console.log(jumlah);
// console.log(perkalian);
// console.log(pembagian);
// console.log(pengurangan);

// function kalkulasi(a, b) {
//     return {
//         jumlah: a + b,
//         perkalian: a * b,
//         pembagian: a / b,
//         pengurangan: a - b
//     }
// }
// const { jumlah, pembagian, perkalian, pengurangan } = kalkulasi(2, 3);
// console.log(perkalian);


const mhs1 = {
    nama: 'Edit Wiranto',
    jurusan: 'Teknik Informatika',
    umur: 24,
    orangTua: {
        ayah: 'ahok',
        ibu: 'alui',
        abang: {
            abangPertama: 'suwandi',
            abangKedua: 'Wiranto'
        }
    }
}

function cetakMhs({nama, umur,orangTua: {ayah,ibu,abang : {abangPertama,abangKedua}}}) {
    return `Nama saya ${nama}, Umur saya ${umur}, Nama ayah saya ${ayah}, dan nama ibu saya ${ibu}, Saya punya dua abang, abang pertama namanya ${abangPertama}, dan abang kedua namanya ${abangKedua}`;
}

console.log(cetakMhs(mhs1))


