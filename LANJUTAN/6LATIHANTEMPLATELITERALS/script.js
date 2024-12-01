// const mhs = {
//     nama: 'Edit Wiranto',
//     kelas: 'TIH-19',
//     email: 'editwiranto@gmail.com'
// }

// const el = `
//     <div class="mhs">
//         <h2>${mhs.nama}</h2>
//         <span>${mhs.kelas}</span>
//     </div>
// `;


// document.body.innerHTML = el;


//looping
// const mhs = [
//     {
//         nama: 'Edit Wiranto',
//         nim: 1944097
//     },
//     {
//         nama: 'William Jan Charles',
//         nim: 199440888
//     },
//     {
//         nama: 'Frengki',
//         nim:5597415641
//     }
// ]


// const el = `
//     <div>
//         ${mhs.map(m => `<ul>
//                 <li>${m.nama}</li>
//                 <li>${m.nim}</li>
//             </ul>
//         `).join('')}
//     </div>
// `;

// 3. conditionals

// const lagu = {
//     judul: 'Kau Adalah',
//     penyanyi: 'Isyana Sarasvati',
//     feat: 'Rayi Putra'
// }


// const el = `<div class="lagu">
//                 <ul>
//                     <li>${lagu.judul} </li>
//                     <li>${lagu.penyanyi} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//                 </ul>
//             </div>`

// 4 Nested
// HTML Fragments bersarang


const mhs = {
    nama: 'Edit Wiranto',
    semester: 5,
    mataKuliah: [
        'Rekayasa Web',
        'Analisis dan perancangan sistem informasi',
        'Pemograman Sistem Interaktif',
        'Perancangan Sistem Berorientasi Object'
    ]
};

function cetakMataKuliah(mataKuliah){
    return `<ol>
                ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
            </ol>`
}

const el = `<div>
                <h2>${mhs.nama}</h2>
                <span class="semester">${mhs.semester}</span>
                <h4>Mata Kuliah : </h4>
                ${cetakMataKuliah(mhs.mataKuliah)}       
            </div>`

document.body.innerHTML = el;


