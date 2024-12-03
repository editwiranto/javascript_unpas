// const mhs = ['Edit Wiranto', 'Rizki', 'Steven'];

// for (let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]);
// }

// mhs.forEach(m => console.log(m));

// const edit = 'Edit wiranto';

// for (const m of mhs) {
//     console.log(m);
// }


// for (const m of edit) {
//     console.log(m);
// }

// mhs.forEach((m, i) => {
//     console.log(`${m} adalah Mahasiswa ke-${i}`);
// })

// for (const [i, m] of mhs.entries()){
//     console.log(`${m} adalah Mahasiswa ke-${i}`);
// }

//nodelist

// const li = document.querySelectorAll('.nama');

// li.forEach(m => console.log(m.textContent));

// for (const i of li) {
//     console.log(i.innerHTML);
// }

// arguments

// function jumlahAngka() {

//     jumlah = 0;
//     // arguments.forEach(m => jumlah += m);
//     for (const i of arguments) {
//         jumlah += i;
//     }
//     return jumlah;
// }

// console.log(jumlahAngka(1, 2, 3, 4, 5));

const mhs = {
    nama: 'Edit Wiranto',
    kelas: 'TIH-19',
    programStudi:  'Teknik Informatika'
}

for (let i in mhs) {
    console.log(mhs[i]);
}

