const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');

const currentYears = new Date().getFullYear();
const newYear  = new Date(`January 01 ${currentYears+1} 00:00:00`);

function updateCountdown(){
    const currentTime = new Date();
    const diff = newYear - currentTime;
    const day = Math.floor(diff/1000/60/60/24);
    const hour = Math.floor(diff/1000/60/60)%24;
    const minute = Math.floor(diff/1000/60)%60;
    const second = Math.floor(diff/1000)%60;
    
    days.innerHTML = day;
    hours.innerHTML = hour<10?'0'+hour:hour;
    minutes.innerHTML = minute<10?'0'+minute:minute;
    seconds.innerHTML = second<10?'0'+second:second;
}

setInterval(updateCountdown,1000);