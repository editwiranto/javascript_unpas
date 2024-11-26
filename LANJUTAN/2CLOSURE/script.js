function init() {
    let nama = 'Edit';

    function tampilNama() {
        console.log(nama);
    }

    return tampilNama;

}

let testing = init();

testing();



function ucapkanSalam(waktu) {
    return function nama(nama) {
        console.log(`Selamat ${waktu}, sampai jumpa ${nama}`);
    }
}



let selamatPagi = ucapkanSalam('Pagi');
let selamatSiang = ucapkanSalam('Siang');
let selamatMalam = ucapkanSalam('Malam');


selamatPagi('Edit Wiranto');
selamatSiang('Orang Gila');
selamatMalam('Daeng');




let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
})();


document.getElementById('button').addEventListener('click', function () {
    let nambah = document.querySelector('.kosong');
    
    let counter = add();

    nambah.textContent = 'Nomor : ' + counter;


});

