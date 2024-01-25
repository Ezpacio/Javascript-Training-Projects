const qrContainer = document.querySelector('.qr-code-box');
const button = document.getElementById('btn');
const qrInput = document.querySelector('input[type="text"]');
const qrImage = document.querySelector('.qr-code img');
const footerLinks = document.querySelector('footer');

button.addEventListener('click', () => {
    const inputValue = qrInput.value;
    if(inputValue.trim() === ""){return}else{inputValue.trim()};

    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${inputValue}`
    qrImage.addEventListener('load', () =>{
        qrContainer.classList.add('showQr');
        footerLinks.classList.add('hidden')
    });
});