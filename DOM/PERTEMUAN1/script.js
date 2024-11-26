// document.getElementById() -> Element

const h1 = document.getElementById('judul');

h1.style.color = 'red';
h1.style.fontSize = '50px';
h1.style.backgroundColor = 'grey';

//document.getElementByTagName -> HTMLCollection

let p = document.getElementsByTagName('p');

for (i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'lightblue';
}

p[0].style.color = 'green';
p[0].style.letterSpacing = '20px';

let li = document.getElementsByTagName('li');

for (x = 0; x < li.length; x++){
    li[x].style.backgroundColor = 'lightgrey';
}


//document.getElementByClassName() -> HTMLCollection

let p1 = document.getElementsByClassName('p1');

p1[0].style.fontSize = '20px';

// document.querySelector

let par4 = document.querySelector('section#b p');

par4.style.color = 'green';

//document.querySelectorAll

let allP = document.querySelectorAll('p');
allP[0].style.color = 'white';
allP[3].style.color = 'white';


//latihan

const sectionB = document.getElementById('b');
const psection = sectionB.getElementsByTagName('p');

psection[0].style.backgroundColor = 'red';


//setAttribute

const p3 = document.getElementsByClassName('p3')[0];
p3.setAttribute('name', 'Edit Wiranto');


//getAttribut

console.log(p3.getAttribute('name'));


//remove Attribut
p3.removeAttribute('name');

//tambah kelas
p3.classList.add('paragraf3');

//hapus class
p3.classList.remove('paragraf3');

//menambah kelas jika belum ada dan mengahpus kelas jika masi ada
p3.classList.toggle('selamatDatang');

//melihat class dengan memunculkan berdasarkan index
console.log(p3.classList.item('1'));

//cek classs nya ada apa tidak hasil ture/false
p3.classList.contains('paragraf3');

//menimpa paragraf
p3.classList.replace('paragraf3', 'par3');