// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers',
//     success: (movie) => console.log(movie)
// });

//fetch ( mengembalikan nilai promise)
//harus didefenisikan dengan then dengan callback

fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=avengers')
    .then(response => response.json())
    .then(response => console.log(response));

//promise
//object yang merepresentasikan keberhasilan / kegagalan sebuah even yang asyunchronus dimasa yang akan datang

//janji (terpenuhi / ingkar)
//states (fullfiled / rejected / pending)
//callback ( resolve / reject / finally)
//aksi (then / catch)


// let ditepati = true;
// const janji1 = new Promise((benar, tidak) => {
//     if (ditepati) {
//         benar('Janji Telah ditepati');
//     } else {
//         tidak('Janji Tidak ditepati');
//    }
// });

// janji1
//     .then(response => console.log('Ok !' + response))
//     .catch(response => console.log('Ok ! ' + response));


// let ditepati = true;
// const janji2 = new Promise((benar, salah) => {
//     if (ditepati) {
//         setTimeout(() => {
//            benar('Janji Telah ditepati');
//         },2000);
//     } else {
//         setTimeout(() => {
//            salah('Janji Tidak ditepati');
//         }, 2000);
//     }
// });

// console.log('mulai');
// janji2
//     .finally(()=> console.log('selesai menunggu!'))
//     .then(response => console.log(response))
//     .catch(response => console.log(response));
// console.log('selesai');


const avengers = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            nama: 'Spiderman',
        team: 'Iron Man',
        warna: 'Merah'
        }]);
    }, 2000);
});

const musuhAvengers = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            nama: 'Hawkeye',
    team: 'Captain America',
    warna: 'Hitam'
        }]);
    },3000);
});


Promise.all([avengers, musuhAvengers])
    // .then(response => console.log(response));
    .then(response => {
        //spread operator
        const [avengers, musuhAvengers] = response;
        console.log(avengers);
        console.log(musuhAvengers);
    });


