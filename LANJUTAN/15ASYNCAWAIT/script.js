function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 3000;
        if (waktu < 5000) {
            setTimeout(() => {
                resolve('selesai'); 
            },waktu);
        } else {
            reject('kelamaan');
        }
    })   
}
    

// const coba = cobaPromise();
// coba
//     .then(() => console.log(coba))
//     .catch(() => console.log(coba));


async function cobaAsync() { 
    try {
        const coba = await cobaPromise();
        console.log(coba);
    } catch (err) {
        console.log(err);
    }

}

cobaAsync();