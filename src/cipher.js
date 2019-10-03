let positionAscii;
let positionAsciiEncode;
let charPositionAsciiEncode;
let newData = '';

const encode = (name, contact, account, offset) => {

  for (let i = 0; i < name.length; i++) {
    positionAscii = name.charCodeAt(i);

    if (positionAscii >= 65 && positionAscii <= 90) {
      positionAsciiEncode = (positionAscii - 65 + parseInt(offset)) % 26 + 65;
      charPositionAsciiEncode = String.fromCharCode(positionAsciiEncode);
      newData += charPositionAsciiEncode;
    } else if (positionAscii >= 97 && positionAscii <= 122) {
      positionAsciiEncode = (positionAscii - 97 + parseInt(offset)) % 26 + 97;
      charPositionAsciiEncode = String.fromCharCode(positionAsciiEncode);
      newData += charPositionAsciiEncode;
    } else if (positionAscii >= 48 && positionAscii <= 57) {
      positionAsciiEncode = (positionAscii - 47 + parseInt(offset)) % 10 + 47;
      charPositionAsciiEncode = String.fromCharCode(positionAsciiEncode);
      newData += charPositionAsciiEncode;
    } else if (positionAscii >= 32 && positionAscii <= 47) {
      positionAsciiEncode = (positionAscii - 32 + parseInt(offset)) % 16 + 32;
      charPositionAsciiEncode = String.fromCharCode(positionAsciiEncode);
      newData += charPositionAsciiEncode;
    } else {
      console.log(positionAscii);
      newData += String.fromCharCode(positionAscii);
    }
  }
  dataEncode.innerHTML = newData;
}

const decode = (name, offset) => {
  console.log(name);

  for (let i = 0; i < name.length; i++) {
    positionAscii = name.charCodeAt(i);
    console.log(positionAscii);

    if (positionAscii >= 65 && positionAscii <= 90) {
      positionAsciiEncode = (positionAscii + 65 - parseInt(offset)) % 26 + 65;
      charPositionAsciiEncode = String.fromCharCode(positionAsciiEncode);
      newData += charPositionAsciiEncode;
    } else if (positionAscii >= 97 && positionAscii <= 122) {
      positionAsciiEncode = (positionAscii + 97 - parseInt(offset)) % 26 + 97;
      charPositionAsciiEncode = String.fromCharCode(positionAsciiEncode);
      newData += charPositionAsciiEncode;
    } else if (positionAscii >= 48 && positionAscii <= 57) {
      positionAsciiEncode = (positionAscii + 47 - parseInt(offset)) % 10 + 47;
      charPositionAsciiEncode = String.fromCharCode(positionAsciiEncode);
      newData += charPositionAsciiEncode;
    } else if (positionAscii >= 32 && positionAscii <= 47) {
      positionAsciiEncode = (positionAscii + 32 - parseInt(offset)) % 16 + 32;
      charPositionAsciiEncode = String.fromCharCode(positionAsciiEncode);
      newData += charPositionAsciiEncode;
    } else {
      console.log(positionAscii);
      console.log(newData);
      
      newData += String.fromCharCode(positionAscii);
    }
  }
  console.log(dataDecode);
  console.log(newData);

  dataDecode.innerHTML = newData;

}

















/* window.cipher = {
  cifrar: encode(),
  descifrar: decode()
}; */

