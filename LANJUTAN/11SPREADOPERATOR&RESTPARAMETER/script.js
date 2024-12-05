// menggabungkan 2 array

// let mhs = ['Edit Wiranto', 'William Jan Charles', 'Daeng'];
// let dosen = ['Simanjuntak', 'Panggabeab'];

// const orang = [...mhs,'Label', ...dosen];
// console.log(orang);

// let copy = [...mhs];
// copy[0] = 'Fajar';
// console.log(copy);


// const dataLi = document.querySelectorAll('li');
// let mhs = [];

// for (i = 0; i < dataLi.length; i++){
//     mhs.push(dataLi[i].textContent);
// }

// console.log(mhs);

// const mhs = [...dataLi].map(m => m.textContent);
// console.log(mhs);


// const h1 = document.querySelector('.nama');

// const huruf = [...h1.textContent].map(m => `<span>${m}</span>`).join('');

// h1.innerHTML = huruf;


//RESTPARAMETER

// function myFunc() {

//     return [...arguments];
// }

// console.log(myFunc(1,2,3,4,5))

//penjumlahan

// function penjumlahan(...args) {
//     // return Array.from(arguments).reduce((total, i ) => total + i);
//     let total = 0;
//     for (let i of args) {
//         total += i;
//     }

//     return total;
// }

// console.log(penjumlahan(1, 2, 3, 4, 5));

//array distructuring
// const kelompok1 = ['ed', 'wi', 'ra', 'nto'];

// const [ketua, wakil, ...aanggota] = kelompok1;

// console.log(ketua);

//object distructuring

// const kelompok1 = {
//     nama : 'Edit Wiranto',
//     umur: 24,
//     status : 'Belum Menikah'
// }

// const { nama, ...obj } = kelompok1;


// filtering

function tipeData(tipe, ...data) {
    return data.filter(m => typeof m === tipe);
}

console.log(tipeData('boolean','Edit Wiranto',12,14314,true,'Kurang Ajar',false,456))