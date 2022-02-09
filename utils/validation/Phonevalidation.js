const PhoneValidation = (no) => new Promise((resolve, reject) => {

    if(isNaN(no)) return reject('hanya angka', 'error');
    if(no.startsWith('08')) no = no.substring(1);
    if(no.startsWith('628')) no = no.substring(2);

    return resolve(no);
})

export default PhoneValidation;