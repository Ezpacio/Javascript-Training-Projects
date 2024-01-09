// All elememnt
const startBtn = document.querySelector('.start-Btn');
const infoBox = document.querySelector('.info-box');
const exitQuiz = document.querySelector('.exit-quiz');
const contQuiz = document.querySelector('.cont-quiz');
const quizBox = document.querySelector('.quiz-box');

const optionList = document.querySelector('.quiz-box-options');

// if Start Quiz Button Clicked
startBtn.onclick = ()=>{
    infoBox.classList.add('active')
}
exitQuiz.onclick = ()=>{
    infoBox.classList.remove('active')
}
contQuiz.onclick = ()=>{
    infoBox.classList.remove('active')
    quizBox.classList.add('active')
    showQuestions(0)
}

let queCount = 0;
const nextBtn = quizBox.querySelector('.cont-quiz');
// if next button clicked
nextBtn.onclick = ()=>{
    let currentQue = document.querySelector('span.current');
    if(queCount < questions.length -1){
        queCount++;
        showQuestions(queCount);
        currentQue.innerHTML = queCount+1 + " ";
    }else{
        alert('Son soru!')
    }
}

// Getting questions and options from array
function showQuestions(index){
    const queText = document.querySelector('.quiz-box-ques');
    let questionTag = "<span>"+ questions[index].numb +'. '+ questions[index].question +"</span>";
    let optionTag =  "<li>"+ questions[index].options[0] +"</li>"
                    + "<li>"+ questions[index].options[1] +"</li>"
                    + "<li>"+ questions[index].options[2] +"</li>"
                    + "<li>"+ questions[index].options[3] +"</li>";
    queText.innerHTML = questionTag;
    optionList.innerHTML = optionTag;
    const option = optionList.querySelectorAll('li');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick','optionSelected(this)')
        
    }
};
function optionSelected(i){
    let userAnswer = i.textContent;
    let correctAnswer = questions[queCount].answers;
    let allOptions = optionList.children.length;
    if(userAnswer === correctAnswer){
        i.classList.add('correct')
        console.log('Answer is correct!');
    }else{
        i.classList.add('incorrect');
        console.log('Answer is wrong!');
        for (let i = 0; i < allOptions; i++) {
            if(optionList.children[i].textContent === correctAnswer){
                optionList.children[i].setAttribute('class', 'correct')
            }
            
        }
    };
    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add('disabled');
        
    }
}