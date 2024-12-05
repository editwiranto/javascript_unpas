//callback
//syncronus callback

// function halo(udin) {
//     alert(`Halo ${udin}`);
// }


// function getNama(callback) {
//     const nama = prompt('Nama Anda Siapa ?');
//     callback(nama);
// }


// getNama(halo);

//asyncronus
// mhs.forEach(m => console.log(m.nama));



function getDataMahasiswa(url, success, error) {
    let xhr = new XMLHttpRequest();
    
    console.log(xhr);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(xhr.response);
            } else if (xhr.status === 404) {
                error();
            }
        }
    }

    xhr.open('get', url);
    xhr.send();
    
}

// function success(results){
//     console.log(results);
// }
// function error(error) {
//     console.log(error);
// }
console.log('mulai');


getDataMahasiswa('data/mahasiswa.json', (results) => {
    const mhs = JSON.parse(results);
    mhs.forEach(m => console.log(m.nama));
})
console.log('selesai');


console.log('mulai');

$.ajax({
    url: 'data/dosen.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error:()=>{}
});

console.log('selesai');