// Function to generate a random 256-bit key
function generateKey() {
    const crypto = require('crypto');
    return crypto.randomBytes(32).toString('hex');
}

// Function to encrypt data using AES
function encryptData(data, key) {
    const crypto = require('crypto');
    const cipher = crypto.createCipher('aes-256-cbc', key);
    let encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

// Function to decrypt data using AES
function decryptData(encryptedData, key) {
    const crypto = require('crypto');
    const decipher = crypto.createDecipher('aes-256-cbc', key);
    let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// Example usage
const key = generateKey();
const data = 'Hello, World!';
const encrypted = encryptData(data, key);
console.log('Encrypted data:', encrypted);

const decrypted = decryptData(encrypted, key);
console.log('Decrypted data:', decrypted);
