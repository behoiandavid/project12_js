function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)

};

console.log(isValidEmail('example@example.com')) // Повинно вивести: true
console.log(isValidEmail('invalid-email'))       // Повинно вивести: false


function isValidUrl(url) {
    return /^(https?:\/\/)?(www\.)?[a-z0-9\-]+(\.[a-z]{2,})(\/\S*)?$/i.test(url)


};

console.log(isValidUrl('https://www.example.com')) // Повинно вивести: true
console.log(isValidUrl('invalid-url'))             // Повинно вивести: false


