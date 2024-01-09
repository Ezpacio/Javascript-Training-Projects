const container = document.querySelector('.container');
const userHand = document.querySelector('.user-result > img');
const botHand = document.querySelector('.bot-result img');
const resultText = document.getElementById('result-text')
const optionHands = document.querySelectorAll('.option-hand-image');

optionHands.forEach((item, idx) => {
    item.addEventListener('click', (e) => {

        item.classList.add('active');
        if (e.target.tagName === 'SPAN') {
            // Get the source of the clicked hands image
            userHand.src = e.target.querySelector('img').src;
            e.target.lastElementChild.classList.add('active')
        }
        optionHands.forEach((item2, idx2) => {
            if (idx !== idx2) {
                item2.classList.remove('active');
                item2.lastElementChild.classList.remove('active');
            }
        });

        userHand.src = botHand.src = './images/rock.png';
        container.classList.add('start');
        resultText.textContent = "Let's Play!!"

        // timeOut ==>
        setTimeout(() => {
            container.classList.remove('start');

            // Generate a random numbe between 0 - 2
            let rendomNumber = Math.floor(Math.random() * 3);

            // Create an array of bot hand options
            const botHands = ['./images/rock.png', './images/paper.png', './images/scissors.png'];
            botHand.src = botHands[rendomNumber];

            // User Hand
            userHand.src = botHands[idx]

            // User options
            let userValue = ['R', 'P', 'S'][idx];

            // Bot options
            let botValue = ['R', 'P', 'S'][rendomNumber];

            // All positios
            const outComes = {
                RR: 'Draw',
                RP: 'Bot',
                RS: 'User',
                PP: 'Draw',
                PR: 'User',
                PS: 'Bot',
                SS: 'Draw',
                SR: 'Bot',
                SP: 'User',
            };
            // who won
            const outComeValue = outComes[userValue + botValue]

            resultText.textContent = userValue === botValue
                ? 'Match Draw'
                : `${outComeValue} won!!`;

        }, 1500);
    });
});
