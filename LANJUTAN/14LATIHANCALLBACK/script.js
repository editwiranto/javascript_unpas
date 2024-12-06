// $('.search-button').on('click', function () {
//    $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=dca61bcc&s=' + $('.input-keyword').val(),
//     success: results => {
//         const movie = results.Search;
//         let cards = '';
//         let kosong = `<div class="card">
//                             <h3>Data tidak tersedia</h3>
//                             <p>Maaf, tidak ada film untuk ditampilkan.</p>
//                     </div>`;
//         if (movie == undefined) {
//             $('.kosong').html(kosong);
//         }
//         movie.forEach(m => {
//             //panggil dengan function agar lebi rapi showMovie(m)
//             cards += showMovie(m);
//         });

//         $('.movie_container').html(cards);
        
//         //ketika tombol detail di klick
//         $('.modal-detail-button').on('click', function () {
//             $.ajax({
//                 url: 'http://www.omdbapi.com/?apikey=dca61bcc&i=' + $(this).data('imdbid'),
//                 success: m => {
//                     //panggil dengan function agar lebi rapi showDetailMovie(m)
//                     const movieData = showDetailMovie(m);
//                     $('.modal-body').html(movieData);
//                 },
//                 error: (e) => {
//                     console.log(e.responseText);
//                 },
//             });
//         });

//     },
//     error: (e) => {
//         console.log(e.responseText);
//     }
// });

// });


//fetch

// const btnSearch = document.querySelector('.search-button');
// btnSearch.addEventListener('click', function () {
    

//     const inputKeyword = document.querySelector('.input-keyword');
//     fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=' + inputKeyword.value)
//         .then(response => response.json())
//         .then(response => {
//             const movies = response.Search;
//             let cards = '';
//             movies.forEach(m => cards += showMovie(m));
//             const movieContainer = document.querySelector('.movie_container');
//             movieContainer.innerHTML = cards;

//     //ketika tombol detail di klick
//             const modalDetailButton = document.querySelectorAll('.modal-detail-button');
//             modalDetailButton.forEach(btn => {
//                 btn.addEventListener('click', function () {
//                     const imdbid = this.dataset.imdbid;
//                     fetch('http://www.omdbapi.com/?apikey=dca61bcc&i=' + imdbid)
//                         .then(response => response.json())
//                         .then(m => {
//                             const modalBody = document.querySelector('.modal-body');
//                             modalBody.innerHTML = showDetailMovie(m);
//                         })
//                         .catch(err => console.log('Error fetching movie details:', err));
//                 });
//             })
//         });



// })

// async await fetch refactor

const btnCari = document.querySelector('.search-button');
btnCari.addEventListener('click', async function () {
    const inputKeyword = document.querySelector('.input-keyword');
    const movies = await getMovies(inputKeyword.value);
    updateUI(movies);
});

document.addEventListener('click', async function (e) {
    if (e.target.classList.contains('modal-detail-button')) {
        const imdbid = e.target.dataset.imdbid;
        const movieDetail = await getMovieDetail(imdbid);
        updateUIDetail(movieDetail);
    }
});



function getMovies(keyword) {
    return fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=' + keyword)
        .then(response => response.json())
        .then(response => response.Search);
}


function updateUI(movies) {
    let cards = '';
    movies.forEach(m => cards += showMovie(m));
    const movieContainer = document.querySelector('.movie_container');
    movieContainer.innerHTML = cards;
}

function getMovieDetail(imdbid) {
    return fetch('http://www.omdbapi.com/?apikey=dca61bcc&i=' + imdbid)
        .then(response => response.json())
        .then(m => m);
}

function updateUIDetail(m){
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = showDetailMovie(m);
}

function showMovie(m) {
    return `<div class="col-md-4 my-5">
                <div class="card" style="width: 18rem">
                    <img src="${m.Poster}" width="300px" height="450px" class="card-img-top" alt="" />
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${m.Year}</h6>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#movieDetailModal" class="btn btn-primary modal-detail-button" data-imdbid="${m.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>`
}

function showDetailMovie(m) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" alt="" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${m.Title}</h4></li>
                            <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
                            <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
                            <li class="list-group-item"><strong>Writer : </strong>${m.Writer}</li>
                            <li class="list-group-item"><strong>Plot : </strong>${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`
}

//notes

// fetch(resource, init)
//hasil dari fetch berupa promise