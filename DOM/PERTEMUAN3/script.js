const p1 = document.querySelector('section#a .p1');

p1.onclick = function () {
    p1.style.backgroundColor = 'lightblue';
}

const p4 = document.querySelector('section#b p');

p4.addEventListener('click', function () {
    const ul = document.querySelector('section#b ul');

    const liBaru = document.createElement('li');
    const textLiBaru = document.createTextNode('Item Baru');
    liBaru.appendChild(textLiBaru);

    ul.appendChild(liBaru);
}); 