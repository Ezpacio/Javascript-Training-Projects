const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const images = document.querySelector('img');
const progress = document.getElementById('progress');

const musicPlay = () => {
    if (audio.paused) {
        audio.play();
        document.querySelector('.music-info').classList.add('active');
        document.querySelector('.img-container img').classList.add('active');
        playBtn.firstElementChild.classList.remove('fa-play');
        playBtn.firstElementChild.classList.add('fa-pause');
    } else {
        audio.pause();
        document.querySelector('.music-info').classList.remove('active');
        document.querySelector('.img-container img').classList.remove('active');
        playBtn.firstElementChild.classList.remove('fa-pause');
        playBtn.firstElementChild.classList.add('fa-play');
    }
    if(counter === 0){
        title.innerText = `${musics[counter][0].toUpperCase() + musics[counter].slice(1, musics[counter].length)} Kajmer - Istesem de soyleyemem`;
    }else if(counter === 1){
        title.innerText = `${musics[counter][0].toUpperCase() + musics[counter].slice(1, musics[counter].length)} - Med Cezir`;
    }else{
        title.innerText = `${musics[counter][0].toUpperCase() + musics[counter].slice(1, musics[counter].length)} & Bagzilari - akis`;
    }
    images.src = `images/${musics[counter]}.jpeg`;
}

const updateProgress = (e) => {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}


let counter = 0;
const musics = ['sagopa', 'ceza', 'hidra'];
const nextfunc = () => {
    counter++;
    if (counter >= musics.length) {
        counter = 0;
    }
    audio.src = `music/${musics[counter]}.mp3`;
    musicPlay();
}

const prevfunc = () => {
    counter--;
    if (counter < 0) {
        counter = 2;
    }
    audio.src = `music/${musics[counter]}.mp3`;
    musicPlay();
}

const autoNext = () => {
    
    currentTrack = (counter + 1) % musics.length;
    audio.src = `music/${musics[currentTrack]}.mp3`;
    counter++;
    if (counter >= musics.length) {
        counter = 0;
    }
    musicPlay();
    audio.play();
}

nextBtn.addEventListener('click', nextfunc);
prevBtn.addEventListener('click', prevfunc);
playBtn.addEventListener('click', musicPlay);
audio.addEventListener('timeupdate', updateProgress);
document.getElementById('progress-container').addEventListener('click', setProgress);
audio.addEventListener('ended', autoNext);