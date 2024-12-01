// const nama = 'Edit Wiranto';
// const umur = 32;


// function coba(strings, ...values) {
//     //strings berisi Nama Saya Adalah,Umur saya,tahun
//     //...values berisi Edit Wiranto,32
//     let result = '';

//     strings.forEach((str, i) => {
//         result += `${str}${values[i] || ''}`;
//     });
//     return result;
// }



// const str = coba`Nama Saya Adalah ${nama}, Umur saya ${umur} tahun`;
// console.log(str);


// const nama = 'Edit Wiranto';
// const umur = 32;


// function coba(strings, ...values) {
//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }



// const str = coba`Nama Saya Adalah ${nama}, Umur saya ${umur} tahun`;
// console.log(str);


const nama = 'Edit Wiranto';
const umur = 32;
const email = 'editwiranto@gmail.com';


function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`,'');
}

const str = highlight`Nama Saya : ${nama}, Umur Saya : ${umur}, Email : ${email}`;


document.body.innerHTML = str;