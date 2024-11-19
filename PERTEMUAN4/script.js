const biru = document.getElementById('warna-biru');

biru.addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
});

const bBaru = document.createElement('button');
const bText = document.createTextNode('Random Warna');
bBaru.appendChild(bText);
bBaru.setAttribute('type', 'button'); //tambah attribut type dengan value button
bBaru.setAttribute('id', 'random'); // tambah attribut id dengan value random
bBaru.setAttribute('style','display:block; margin:0 auto;') // tambah attribut style dengan value display dan margin agar ke tengah
biru.after(bBaru);

bBaru.addEventListener('click', function () {
    // math round bikin menjadi genap tidak berkoma,
    //math random membaut angka menjadi random * 255 + 1 membuat angka random 0 - 255
    const r = Math.round(Math.random() * 255 + 1); 
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;

});


// const range1 = document.querySelector('input[name=sMerah]');
// const range2 = document.querySelector('input[name=sHijau]');
// const range3 = document.querySelector('input[name=sBiru]');
// const nilai1 = document.getElementsByClassName('nilai1')[0];
// const nilai2 = document.getElementsByClassName('nilai2')[0];
// const nilai3 = document.getElementsByClassName('nilai3')[0];


// range1.addEventListener('input', function () {
//     const r = range1.value;
//     const g = range2.value;
//     const b = range3.value;
//     nilai1.innerHTML = r;


//     document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
// });

// range2.addEventListener('input', function () {
//     const r = range1.value;
//     const g = range2.value;
//     const b = range3.value;
//     nilai2.innerHTML = r;
    
//     document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
// });

// range3.addEventListener('input', function () {
//     const r = range1.value;
//     const g = range2.value;
//     const b = range3.value;
//     nilai3.innerHTML = r;

//     document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
// });

const range = document.querySelectorAll('input[type=range]');
const nilai = document.getElementsByClassName('nilai');

for (i = 0; i <  range.length; i++){
    range[i].addEventListener('input', function () {
        const r = range[0].value;
        const g = range[1].value;
        const b = range[2].value;

        nilai[0].innerHTML = r;
        nilai[1].innerHTML = g;
        nilai[2].innerHTML = b;
        
        document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    });
}


document.body.addEventListener('mousemove', function (event) {
    const xPost = Math.round((event.clientX / window.innerWidth) * 255);
    const yPost = Math.round((event.clientY / window.innerWidth) * 255);

    document.body.style.backgroundColor = `rgb(${xPost},${yPost},100)`
});