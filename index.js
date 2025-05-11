function isValidEmail(email) {
    const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (checkEmail.test(email)) {
        return true
    } else {
        return false
    };
};

console.log(isValidEmail('example@example.com')) // Повинно вивести: true
console.log(isValidEmail('invalid-email'))       // Повинно вивести: false


function isValidUrl(url) {
    const checkURL = /^(https?:\/\/)?(www\.)?[a-z0-9\-]+(\.[a-z]{2,})(\/\S*)?$/i;

    if (checkURL.test(url)) {
        return true
    } else {
        return false
    };
};

console.log(isValidUrl('https://www.example.com')) // Повинно вивести: true
console.log(isValidUrl('invalid-url'))             // Повинно вивести: false


