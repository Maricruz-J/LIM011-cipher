let positionAscci;
let positionAscciEncode;
let charPositionAscciEncode;
let newName = '';

const encode = (name, contact, account, offset) => {

  for (let i = 0; i < name.length; i++) {


    positionAscci = name.charCodeAt(i);

    if (positionAscci >= 65 && positionAscci <= 90) {
      positionAscciEncode = (positionAscci - 65 + parseInt(offset)) % 26 + 65;
      charPositionAscciEncode = String.fromCharCode(positionAscciEncode);
      newName += charPositionAscciEncode;
    } else if (positionAscci >= 97 && positionAscci <= 122) {
      positionAscciEncode = (positionAscci - 97 + parseInt(offset)) % 26 + 97;
      charPositionAscciEncode = String.fromCharCode(positionAscciEncode);
      newName += charPositionAscciEncode;
    } else if (positionAscci >= 48 && positionAscci <= 57) {
      positionAscciEncode = (positionAscci - 47 + parseInt(offset)) % 10 + 47;
      charPositionAscciEncode = String.fromCharCode(positionAscciEncode);
      newName += charPositionAscciEncode;
    }else if (positionAscci >= 32 && positionAscci <= 47) {
      positionAscciEncode = (positionAscci - 32 + parseInt(offset)) % 16 + 32;
      charPositionAscciEncode = String.fromCharCode(positionAscciEncode);
      newName += charPositionAscciEncode;
    }else{
      console.log(positionAscci);
      newName += String.fromCharCode(positionAscci);
    }
      
      
  }
  console.log(newName);
}

const decode = () => {


}

















/* window.cipher = {
  cifrar: encode(),
  descifrar: decode()
}; */

