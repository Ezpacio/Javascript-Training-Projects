const button = document.querySelector('.copy-btn');
const colorInputs = document.querySelectorAll('.picer');
const options = document.getElementById('options');
const gradBox = document.querySelector('.color-panel');
const cssOutput = document.getElementById('css-grad-code');
const buttonHover = document.querySelector('.copy-btn > .before');
const copyBtn = document.querySelector('.copy-btn');
const refreshBtn = document.getElementById('refresh');


// Copy Button design
button.addEventListener('click', () =>{
    button.lastElementChild.classList.add('active');
    setTimeout(() => {
        button.lastElementChild.classList.remove('active');
    }, 700);
})

// Create random hex code
function randomColor(){
    const randomHex = Math.floor(Math.random()*16777215).toString(16);
    return `#${randomHex}`
}

// Update
function generateGradient(isRandom){
    if (isRandom) {
        colorInputs[0].value = randomColor();
        colorInputs[1].value = randomColor();
    }
    const gradient = `linear-gradient(${options.value},${colorInputs[0].value}, ${colorInputs[1].value})`;
    // changed gradient box with current gradient color
    gradBox.style.background = gradient;
    // changed clipboard with current gradient color code
    cssOutput.innerHTML = `<span>background:</span> ${gradient}`;
    // changed button's hover with current gradient color
    buttonHover.style.background = gradient;
}

// Copy Button
function copyButton(){
    navigator.clipboard.writeText(cssOutput.textContent);
    copyBtn.firstElementChild.textContent = 'Code Copied!'
    setTimeout(() => {
        copyBtn.firstElementChild.innerHTML = `<i class='bx bx-copy'></i>Copy to Clipboard`
    }, 1000);
};

// Inputs
colorInputs.forEach(input => {
    input.addEventListener('input', () => generateGradient(false));
});

options.addEventListener('change', () => generateGradient(false));
copyBtn.addEventListener('click', copyButton);
refreshBtn.addEventListener('click', () => generateGradient(true));
