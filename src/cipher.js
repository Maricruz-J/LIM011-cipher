let positionAscii;
let positionAsciiChanged;
let charPositionAsciiChanged;
let newDataEncode = '';
let newDataDecode = '';

const encode = (name, contact, account, offsetInformant) => {
    newDataEncode = '';
    let abc = name + ' ' + contact + ' ' + account;
    for (let i = 0; i < abc.length; i++) {
        positionAscii = abc.charCodeAt(i);
        if (positionAscii >= 65 && positionAscii <= 90) {
            positionAsciiChanged = (positionAscii - 65 + parseInt(offsetInformant)) % 26 + 65;
            charPositionAsciiChanged = String.fromCharCode(positionAsciiChanged);
            newDataEncode += charPositionAsciiChanged;
        } else if (positionAscii >= 97 && positionAscii <= 122) {
            positionAsciiChanged = (positionAscii - 97 + parseInt(offsetInformant)) % 26 + 97;
            charPositionAsciiChanged = String.fromCharCode(positionAsciiChanged);
            newDataEncode += charPositionAsciiChanged;
        } else if (positionAscii >= 48 && positionAscii <= 57) {
            positionAsciiChanged = (positionAscii - 48 + parseInt(offsetInformant)) % 10 + 48;
            charPositionAsciiChanged = String.fromCharCode(positionAsciiChanged);
            newDataEncode += charPositionAsciiChanged;
        } else {
            newDataEncode += String.fromCharCode(positionAscii);
        }
        dataEncode.innerHTML = newDataEncode;
    }
}
const decode = (name, offsetDenounced) => {
    newDataDecode = '';
    for (let i = 0; i < name.length; i++) {
        positionAscii = name.charCodeAt(i);
        if (positionAscii === 32) {
            newDataDecode += '\n';
        } else if (positionAscii >= 65 && positionAscii <= 90) {
            positionAsciiChanged = (positionAscii - 90 - parseInt(offsetDenounced)) % 26 + 90;
            charPositionAsciiChanged = String.fromCharCode(positionAsciiChanged);
            newDataDecode += charPositionAsciiChanged;
        } else if (positionAscii >= 97 && positionAscii <= 122) {
            positionAsciiChanged = (positionAscii - 122 - parseInt(offsetDenounced)) % 26 + 122;
            charPositionAsciiChanged = String.fromCharCode(positionAsciiChanged);
            newDataDecode += charPositionAsciiChanged;
        } else if (positionAscii >= 48 && positionAscii <= 57) {
            positionAsciiChanged = (positionAscii - 57 - parseInt(offsetDenounced)) % 10 + 57;
            charPositionAsciiChanged = String.fromCharCode(positionAsciiChanged);
            newDataDecode += charPositionAsciiChanged;
        } else {
            newDataDecode += String.fromCharCode(positionAscii);
        }
    }
    dataDecode.innerHTML = newDataDecode;
}


/* window.cipher = {
    cifrar: encode(),
    descifrar: decode()
}; */