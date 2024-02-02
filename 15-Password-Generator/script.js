const checkBox = document.querySelectorAll('.check-box');
const slideValue = document.querySelector('.value-left');
const inputRange = document.querySelector('input');

// slider range
inputRange.oninput = (() => {
    let value = inputRange.value;
    slideValue.textContent = value;
});
const progressColor = () => {
    let x = (inputRange.value - inputRange.min) / (inputRange.max - inputRange.min) * 100;
    let color = `linear-gradient(90deg, var(--btn-color) ${x}%, var(--title-color) ${x}%`;
    inputRange.style.background = color;
}
inputRange.addEventListener('mousemove', progressColor, { passive: true });
inputRange.addEventListener('touchmove', progressColor, { passive: true });
inputRange.addEventListener('touchend', progressColor, { passive: true });

// Check Box
checkBox.forEach(check => {
    check.addEventListener('click', () => {
        check.classList.toggle('active');
    })
});



