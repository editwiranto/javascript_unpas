//ambil semua elemen video
const li = Array.from(document.querySelectorAll('[data-duration]'));

//pilih hanya yang 'Javascrip lanjutan'
let jsLanjut = li.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

    //ambil durasi masing masing video
    .map(item => item.dataset.duration)

//ubah durasi menjadi floatm ubah menit menjadi detik
    .map(waktu => {
        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })

//jumlahkan semua detik
    .reduce((total,detik) => total + detik)

//ubah formatnya jadi jam menit deitk
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

//simpan di dom
const pDurasi = document.querySelector('.duration');
pDurasi.textContent = `${jam} jam ${menit} menit ${detik} detik`;
const jmlVideo = li.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pVideo = document.querySelector('.video');
pVideo.textContent = `${jmlVideo} Video`;
