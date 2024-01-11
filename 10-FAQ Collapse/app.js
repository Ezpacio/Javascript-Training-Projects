const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    question.addEventListener('click', () => {
        question.classList.toggle('active');
        question.firstElementChild.nextElementSibling.lastElementChild.classList.toggle('active');
    })
})