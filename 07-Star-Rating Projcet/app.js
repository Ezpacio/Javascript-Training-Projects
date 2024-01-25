const stars = document.querySelectorAll('i');
const emojis = document.querySelectorAll('.emoji')

let counter = 0;

stars.forEach((star,index) => {
    star.addEventListener('click', () =>{

        stars.forEach((item,index2) => {
            index >= index2 ? item.classList.add('active') : item.classList.remove('active');
            emojis.forEach((emoji, index3) =>{
                index === index3 ? emoji.classList.add('active') : emoji.classList.remove('active');

            })
        });
    });
});
