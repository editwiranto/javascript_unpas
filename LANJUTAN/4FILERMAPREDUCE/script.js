const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
const angka3 = 3;
const arrayKosong = -[];
//mencari angka >= 3

// for (i = 0; i < angka.length; i++){
//     if (angka[i] >= angka3) {
//         console.log(angka[i]);
//     }
// }


//filter
//angka yang lebi besar dari 3
// const filter = angka.filter(function (n) {
//     return n >= 3;
// });
// console.log(filter);

const filter = angka.filter(n => n >= 3);
console.log(filter);



// map
//angka dikalikan 3
// const map = angka.map(function (n) {
//    return n * 2;
// });
// console.log(map);

const map = angka.map(n => n * 2);
console.log(map);



//reduce
//jumlah angka

// ket : 5 adalah angka awal penjumlahan jadi
// 5 + [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9]
// const reduce = angka.reduce(function (accumulator , currentvalue) {
//     return accumulator + currentvalue;
// },5);


const reduce = angka.reduce((accumulator, currentvalue) => accumulator + currentvalue,10);




console.log(reduce);