function getPilihanComputer(){
    const random = Math.random();
    
    if (random < 0.34) return ("gajah");
    if (random > 0.34 && random < 0.68) return("semut");
    return "orang";
}

function getHasil(comp, player) {
    if (player == comp) return "Seri";
    if (player == "gajah") return (comp == "orang") ? "Menang" : "Kalah";
    if (player == "semut") return (comp == "gajah") ? "Menang" : "Kalah";
    if (player == "orang") return (comp == "semut") ? "Menang" : "Kalah";
    return "Error";
}

const pGajah = document.querySelector('.gajah');

let skorK = 0;
let skorP = 0;



function getScore(hasil) {

    if (hasil == "Seri") {
        // No score change for a draw
    } else if (hasil == "Menang") {
        skorP += 1; // Increment player score for a win
    } else if (hasil == "Kalah") {
        skorK += 1; // Increment computer score for a loss
    }
const sKomputer = document.querySelector('.sKomputer');
const sPlayer = document.querySelector('.sPlayer');
    // Update the score displays
    sKomputer.innerHTML = skorK;
    sPlayer.innerHTML = skorP;
}

function putar() {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'orang', 'semut'];
    let i = 0;
    const waktuMulai = new Date().getTime();

    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        
        imgComputer.setAttribute('src', 'image/' + gambar[i++] + '.png');
        if (i == gambar.length) i = 0;

    },100);

}

const pilihan = document.querySelectorAll('ul li img');

pilihan.forEach(function(pil){
    pil.addEventListener('click', function () {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        putar();

        setTimeout(function () {
            const imgComputer = document.querySelector('.img-komputer');

            imgComputer.setAttribute('src', 'image/' + pilihanComputer + '.png');

            const info = document.querySelector('.info');
            info.innerHTML = hasil;

            getScore(hasil) 
        },1000);

        
    });
})


// pGajah.addEventListener('click', function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.img-komputer');

//     imgComputer.setAttribute('src', 'image/' + pilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;

//     getScore(hasil)
// });

// const pOrang = document.querySelector('.orang');

// pOrang.addEventListener('click', function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.img-komputer');

//     imgComputer.setAttribute('src', 'image/' + pilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;

//     getScore(hasil)
// });

// const pSemut = document.querySelector('.semut');

// pSemut.addEventListener('click', function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.img-komputer');

//     imgComputer.setAttribute('src', 'image/' + pilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;

//     getScore(hasil)
// });


