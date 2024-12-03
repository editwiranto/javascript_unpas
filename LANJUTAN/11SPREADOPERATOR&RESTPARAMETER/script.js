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


const h1 = document.querySelector('.nama');

const huruf = [...h1.textContent].map(m => `<span>${m}</span>`).join('');

h1.innerHTML = huruf;