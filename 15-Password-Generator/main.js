const resultEl = document.querySelector('.results  p');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const button = document.getElementById('generate');
const coppyPassword = document.getElementById('copy');

// random Lowercase
const getRandomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

// random Uppercase
const getRandomUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

// random Number
const getRandomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

// random Symbols
const getRandomSymbols = () => {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
};

const randomFunc = {
    upper: getRandomUpper,
    lower: getRandomLower,
    number: getRandomNumber,
    symbol: getRandomSymbols
};

const generatePass = (upper, lower, number, symbol, length) => {
    let generatePassword = '';
    const typesCout = upper + lower + number + symbol;
    const typeArr = [{ upper }, { lower }, { number }, { symbol }].filter(item => Object.values(item)[0]);

    if (typesCout === 0) {
        return ''
    };

    for (let i = 0; i < length; i += typesCout) {
        typeArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatePassword += randomFunc[funcName]()
        });
    };

    const finalPassword = generatePassword.slice(0, length);
    return finalPassword;
};

coppyPassword.addEventListener('click', (e) => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if (!password) { return }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();

    e.target.lastElementChild.classList.add('active');
    setTimeout(() => {
        e.target.lastElementChild.classList.remove('active');
    }, 1000)
});

button.addEventListener('click', () => {
    const length = +slideValue.innerHTML;

    const hasUpper = uppercaseEl.classList.contains('active');
    const hasLower = lowercaseEl.classList.contains('active');
    const hasNumber = numbersEl.classList.contains('active');
    const hasSymbol = symbolsEl.classList.contains('active');

    resultEl.innerHTML = generatePass(hasUpper, hasLower, hasNumber, hasSymbol, length);
});