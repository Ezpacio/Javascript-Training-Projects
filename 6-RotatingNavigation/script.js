const menuOpen = document.getElementById('open');
const menuClose = document.getElementById('close');
const container = document.querySelector('.container');
const list = document.querySelectorAll('li');

// circle => rotate
// container => show-nav

menuOpen.addEventListener('click', (e) => {
    e.target.parentElement.parentElement.classList.add('rotate');
    container.classList.add('show-nav');
    list.forEach((item) => {

        item.style.transform = 'translateX(0)';
    })
    list[list.length -1].style.transform = 'translateX(0)';

})

menuClose.addEventListener('click', (e) => {
    e.target.parentElement.parentElement.classList.remove('rotate');
    container.classList.remove('show-nav');
    list.forEach((item) => {

        item.style.transform = 'translateX(-100%)'
    })
    list[list.length -1].style.transform = 'translateX(-150%)';
})