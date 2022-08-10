import playList from './playlist.module.js';
export function getMusic() {

    const audio = document.querySelector('audio');
    const playListContainer = document.querySelector('.play-list');
    const button = document.getElementById('button');
    let isPlay = false;
    let playNum = 0;
    let audioPrev = document.querySelector('.play-prev');
    let audioNext = document.querySelector('.play-next');
    let currentTime;


    function playAudio() {
        if (!isPlay) {
            audio.src = playList[playNum].src;
            audio.play();
            isPlay = true;
            (playListContainer.children[playNum]).classList.add('active');
        } else {
            audio.pause();
            isPlay = false;
        }
    }


    function toggleBtn() {
        button.classList.toggle('pause');
        playAudio();
    }
    button.addEventListener('click', toggleBtn);


    playList.forEach(el => {
        const li = document.createElement('li');
        li.classList.add('song');
        li.textContent = el.title;
        playListContainer.append(li);
        const playIcon = document.createElement('img');
        playIcon.src = '../public/play.svg';
        playIcon.classList.add('play-small');
        li.prepend(playIcon);
    })


    function playNext() {
        if (playNum < playList.length - 1) {
            playNum = playNum + 1;
            audio.src = playList[playNum].src;
            audio.play();
            isPlay = true;
            button.classList.add('pause');
            audioPrev.classList.remove('dark-prev');
            (playListContainer.children[playNum-1]).classList.remove('active');
            (playListContainer.children[playNum]).classList.add('active');
        } else {
            audioNext.classList.add('dark-next');
        }
    }


    function playPrev() {
        if (playNum > 0) {
            playNum = playNum - 1;
            audio.src = playList[playNum].src;
            audio.play();
            isPlay = true;
            button.classList.add('pause');
            audioNext.classList.remove('dark-next');
            (playListContainer.children[playNum+1]).classList.remove('active');
            (playListContainer.children[playNum]).classList.add('active');
        } else {
            audioPrev.classList.add('dark-prev')
        }
    }

    audioPrev.addEventListener('click', playPrev)
    audioNext.addEventListener('click', playNext)
}