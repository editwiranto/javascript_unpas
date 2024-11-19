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

pGajah.addEventListener('click', function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pGajah.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    const imgComputer = document.querySelector('.img-komputer');

    imgComputer.setAttribute('src', 'image/' + pilihanComputer + '.png');

    const info = document.querySelector('.info');
    info.innerHTML = hasil;
});

const pOrang = document.querySelector('.orang');

pOrang.addEventListener('click', function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pOrang.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    const imgComputer = document.querySelector('.img-komputer');

    imgComputer.setAttribute('src', 'image/' + pilihanComputer + '.png');

    const info = document.querySelector('.info');
    info.innerHTML = hasil;
});

const pSemut = document.querySelector('.semut');

pSemut.addEventListener('click', function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pSemut.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    const imgComputer = document.querySelector('.img-komputer');

    imgComputer.setAttribute('src', 'image/' + pilihanComputer + '.png');

    const info = document.querySelector('.info');
    info.innerHTML = hasil;
});