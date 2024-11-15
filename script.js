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