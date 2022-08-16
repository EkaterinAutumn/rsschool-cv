export function getPhoto() {
    const body = document.querySelector('.content');
    let randomNum;

    function getRandomNum() {
        let res = Math.floor(Math.random() * 20);
        return res;
    }

    const date = new Date();
    const hour = date.getHours();
    function getTimeOfDay() {
        if (hour >= 6 && hour < 12) {
            return 'morning';
        } else if (hour >= 12 && hour < 18) {
            return 'afternoon';
        } else if (hour >= 18 && hour < 24) {
            return 'evening';
        } else if (hour >= 0 && hour < 6) {
            return 'night';
        }
    }

    function setBg() {
        let timeOfDay = getTimeOfDay(hour);
        if (randomNum === undefined) {
            randomNum = getRandomNum();
        }
        let bgNum = (String(randomNum)).padStart(2, "0");
        const src = `https://raw.githubusercontent.com/EkaterinAutumn/slider-images/assets/images/${timeOfDay}/${bgNum}.jpg`;
        const img = new Image();
        img.src = src;
        img.addEventListener('load', () => {
            body.style.backgroundImage = `url('${src}')`;
        })
    }

    setBg()

    function getSlideNext() {
        if (randomNum + 1 !== 20) {
            randomNum = randomNum + 1;
        } else if (randomNum + 1 === 20) {
            randomNum = 1;
        }
        setBg();
    }

    function getSlidePrev() {
        if (randomNum - 1 !== 0) {
            randomNum = randomNum - 1;
        } else if (randomNum - 1 === 0) {
            randomNum = 19;
        }
        setBg()
    }

    const slidePrev = document.querySelector('.slider-prev');
    const slideNext = document.querySelector('.slider-next');

    slidePrev.addEventListener('click', getSlidePrev)
    slideNext.addEventListener('click', getSlideNext)
}