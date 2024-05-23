// const Buffer = require('buffer').Buffer;

// function hexToBuffer(hex) {
//     if (hex.length % 2 !== 0) throw new Error("Invalid hex string");
//     return Buffer.from(hex, 'hex');
// }


// const hexString = '71c7078f93acc37db46d20cd9aa00733';
// const buffer = hexToBuffer(hexString);
// console.log('Buffer:', buffer);
// console.log('Buffer:', Buffer.from(hexString));
// console.log('Length of Buffer:', buffer.length); 

const CryptoJS = require("crypto-js");
 
// 加密函数
function encryptAES256CBC(plaintext, secretKey, iv) {
    return CryptoJS.AES.encrypt(plaintext, CryptoJS.enc.Utf8.parse(secretKey), {
        iv: CryptoJS.enc.Utf8.parse(iv),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }).toString();
}
 
// 解密函数
function decryptAES256CBC(ciphertext, secretKey, iv) {
    const bytes = CryptoJS.AES.decrypt(ciphertext, CryptoJS.enc.Utf8.parse(secretKey), {
        iv: CryptoJS.enc.Utf8.parse(iv),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return bytes.toString();
}
 
// 使用示例
const secretKey = "71c7078f93acc37db46d20cd9aa00733"; // 256位密钥
const iv = "d7dccf72f4af7220d0404f18183a811f"; // 128位初始化向量
const plaintext = "5f2b17bcb9d7c7624dbf1ec22ecf30812b675946d4d6ba67723bdf1921c95bb1e939aa94b34a4bbab816bcd8b92547f40d361fb6f0e1f4e0d9e52b7975e22962b5a975ccd11a4b06062d2c822855ddc42fe4962d1056bc8fd76a4c722ca7173772e77cf1ee2faa184d1fae73c061631788b27bf7c1a00fdefe479f3c9d7b9d7de01b60bc838381a8e10bdd620fbdd47de28bf12a76605546cf4860e197f4ec69bbc879a685af0d24f89ea2b380ae42a3124d6e8ddae7790c614d2d615fec6240";
 
// const ciphertext = encryptAES256CBC(plaintext, secretKey, iv);
// console.log('Ciphertext:', ciphertext);
 
const decrypted = decryptAES256CBC(plaintext, secretKey, iv);
console.log('Decrypted text:', decrypted);
