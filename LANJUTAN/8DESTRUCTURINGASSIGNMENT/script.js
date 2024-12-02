//destructuring array

// let mhs = ['Edit', 'Wiranto', 'William'];
// let [satu, dua, tiga] = mhs;

// console.log(dua);

//skipiing item

// let mhs = ['Edit', 'Wiranto', 'William','Jan Charles'];
// let [satu, , , dua] = mhs;

// console.log(dua);


//swap iitem

// let a = 1;
// let b = 2;

// console.log(a);
// console.log(b);

// [a, b] = [b, a];

// console.log(a);
// console.log(b);


// return value pada function

// function coba() {
//     return [1, 2];
// }

// let [a, b] = coba();

// [a, b] = [b, a];

// console.log(a);

// Rest Parameter

// const [a, ...values] = [1, 2, 3, 4, 5];

// console.log(a);
// console.log(values);


// Destructuring Object

// const mhs = {
//     nama: 'Edit Wiranto',
//     umur: 33
// }

// const { nama, umur } = mhs;

// console.log(umur);

//destructuring object tanpa deklarasi

// ({ nama, umur } = { nama: 'Edit Wiranto', umur: 33 });

// console.log(umur);


// assign ke variabel baru

// const mhs = {
//     nama: 'Edit Wiranto',
//     kelas: 'TIH-19'
// }
// const { nama: n, kelas: k } = mhs;
// console.log(k);

//memberikan default value pada object


// const mhs = {
//     nama: 'Edit Wiranto',
//     Kelas: 'TIH-19'
// }

// const { nama: n, kelas: k, email = "editwiranto@gmail.com" } = mhs;
// console.log(email);

// const mhs = {
//     id: 123,
//     nama: 'Edit Wiranto',
//     Kelas: 'TIH-19'
// }

// function getIdMhs(mhs) {
//     return mhs.id;
// }

// console.log(getIdMhs(mhs))

const mhs = {
    id: 123,
    nama: 'Edit Wiranto',
    Kelas: 'TIH-19'
}


function getIdMhs({id, nama}) {
    return nama;
}

console.log(getIdMhs(mhs));