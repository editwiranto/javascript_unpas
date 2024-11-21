// const close = document.querySelectorAll('.close');

// for (i = 0; i < close.length; i++){
//     close[i].addEventListener('click', function (e) {
//         e.target.parentElement.style.display = "none";
//     });
// }


// close.forEach(function (li) {
//     li.addEventListener('click', function (e) {
//         e.target.parentElement.style.display = "none";
//         e.preventDefault();
//         e.stopPropagation();
//     })
// });

// const card = document.querySelectorAll('.card');
// card.forEach(function (card) {
//     card.addEventListener('click', function (e) {
//         alert('oke');
//     });
// });

const container = document.querySelector('.container');

container.addEventListener('click', function (e) {
    if (e.target.className == 'close') {
        e.target.parentElement.style.display = "none";
        e.preventDefault();
    }
});

