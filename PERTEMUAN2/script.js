const pBaru = document.createElement('p');
const textBaru = document.createTextNode('Paragraf 4 Baru');
pBaru.appendChild(textBaru);


const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

const p3 = sectionA.querySelector('.p3');
sectionA.insertBefore(pBaru, p3)


const liBaru = document.createElement('li');
const item4 = document.createTextNode("item 4 Baru");
liBaru.appendChild(item4);


const liBaru2 = document.createElement("li");
const item2 = document.createTextNode("item 2 ( 2 ) Baru");
liBaru2.appendChild(item2);

const pBaru3 = document.createElement("p");


// pBaru2.appendChild(item4);


const ul = document.querySelector('section#b ul');
const li = ul.querySelector('li:nth-child(3)');
ul.appendChild(liBaru);

const sectionB = document.querySelector('section#b ul');
sectionB.appendChild(liBaru2);

sectionB.insertBefore(liBaru2, li);
