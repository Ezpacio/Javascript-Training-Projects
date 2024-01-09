const buttons = document.querySelectorAll('.drum');

buttons.forEach((button) => {
    button.addEventListener('click', function () {
        let buttonInnerHTML = this.innerHTML;
        drumSounds(buttonInnerHTML)
        buttonAnimation(buttonInnerHTML)
    });
});

document.addEventListener('keypress',function(e){
    drumSounds(e.key)
    buttonAnimation(e.key)
})

function drumSounds(key){
    switch (key) {
        case 'w':
            let tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;

        case 'a':
            let tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            let tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            let tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            let snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        case 'k':
            let crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case 'l':
            let kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;
        default:
    }
}



function buttonAnimation(currentKey){
    let activeButton = document.querySelector('.' + currentKey);
    activeButton.classList.add('pressed');

    setTimeout(() => {
        activeButton.classList.remove('pressed');
    }, 100);

}


// let audio = new Audio('./sounds/tom-1.mp3');
// audio.play();

// class bellBoy{
//     constructor(name,age,workPerment,language) {
//         this.name = name;
//         this.age = age;
//         this.workPerment = workPerment;
//         this.language = language;
//         this.move = function(){
//             alert('Movingg...')
//         }
//     }
// }

// let bellBoy1 = new bellBoy('samet',23,true,['English','Turkish']);
// let bellBoy2 = new bellBoy('ahmet',24,true,['English','Turkish']);

// console.log(bellBoy1);
// bellBoy1.move();