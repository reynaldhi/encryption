// Function to generate a 2048-bit RSA key pair
function generateKeyPair() {
    const crypto = require('crypto');
    const keyPair = crypto.generateKeyPairSync('rsa', {
      modulusLength: 2048,
      publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
      },
      privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem'
      }
    });
    return { publicKey: keyPair.publicKey, privateKey: keyPair.privateKey };
}   

// Function to encrypt data using RSA
function encryptData(data, publicKey) {
    const crypto = require('crypto');
    const encrypted = crypto.publicEncrypt({ key: publicKey }, data); // directly pass string
    return encrypted.toString('base64');
}

// Function to decrypt data using RSA
function decryptData(encryptedData, privateKey) {
    const crypto = require('crypto');
    const buffer = Buffer.from(encryptedData, 'base64'); // convert to buffer
    const decrypted = crypto.privateDecrypt({ key: privateKey }, buffer);
    return decrypted.toString('utf8');
}

// Example usage
const { publicKey, privateKey } = generateKeyPair();
const data = 'Hello, World!';
const encrypted = encryptData(data, publicKey);
console.log('Encrypted data:', encrypted);

const decrypted = decryptData(encrypted, privateKey);
console.log('Decrypted data:', decrypted);
