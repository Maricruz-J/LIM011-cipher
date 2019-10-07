const nameInformant = document.getElementById('name-informant');
const contactNumber = document.getElementById('contact-number');
const accountNumber = document.getElementById('account-number');
const offsetInformant = document.getElementById('offset-informant');

const btnEncode = document.getElementById('btn-encode');
const dataEncode = document.getElementById('data-encode');

const nameBeneficiary = document.getElementById('name-beneficiary');
const offsetDenounced = document.getElementById('offset-denounced');
const btnDecode = document.getElementById('btn-decode');
const dataDecode = document.getElementById('data-decode');

btnEncode.addEventListener('click', () => {
    let dataInformant = nameInformant.value + ' ' + contactNumber.value + ' ' + accountNumber.value;
    cipher.encode(dataInformant, offsetInformant.value);
})

btnDecode.addEventListener('click', () => {
    cipher.decode(nameBeneficiary.value, offsetDenounced.value);
})