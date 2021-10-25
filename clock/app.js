const secondEl = document.querySelector('.second-hand');
const minuteEl = document.querySelector('.minute-hand')
const hourEl = document.querySelector('.hour-hand')

const audio = new Audio();
audio.src = "sounds/ticktock.wav";


function setTime() {

    const now = new Date();
    const seconds = now.getSeconds();

    audio.currentTime = 0;
    audio.play();

    /*
    60sec = 360deg
    1sec = 360 / 60 => 6deg
    */
    const secondDegrees = seconds * 6;
    secondEl.style.transform = `translateX(-50%) rotate(${secondDegrees}deg)`;


    const minutes = now.getMinutes();
    /*
    60min = 360deg
    1min = 360 / 60 => 6deg
    */
    const minuteDegrees = (minutes * 6) + (seconds/60)*6;
    minuteEl.style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`;


    let hours = now.getHours();
    /*
    24hours = 720deg;
    1hour = 720 / 24 => 30deg;
    */
    const hourDegrees = (hours * 30) + (minutes/60)*30;
    hourEl.style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;
    console.log(hours + "\t" + hourDegrees);

}

setInterval(setTime, 1000);