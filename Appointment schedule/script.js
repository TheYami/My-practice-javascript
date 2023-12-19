const countdownForm = document.getElementById('countdown-form');
const inputContainer = document.getElementById('input-container');
const dateEl = document.getElementById('date-picker');
const countdownEl = document.getElementById('countdown');
const countdownTitleEl = document.getElementById('countdown-title');
const countdownBtnEl = document.getElementById('countdown-button');
const timeEl = document.querySelectorAll('span');
const completeEl = document.getElementById('complete');
const completeInfoEl = document.getElementById('complete-info');
const completeBtnEl = document.getElementById('complete-button');

// ควบคุมการทำงาน  

let countDownTitle = '';
let countDownDate = '';

let countDownValue = Date //วันที่เก็บจากform
let countDownActive; //ตัวนับเวลา
let saveCountdown; //เก็บ title and noti

// ตัวแปรแปลงเวลา
const second = 1000;
const minute = second*60;
const hour = minute*60;
const day = hour*24;

countdownForm.addEventListener('submit',updateForm);

function updateForm(e){
    e.preventDefault();
    countDownTitle = e.srcElement[0].value;
    countDownDate = e.srcElement[1].value;

    if(countDownTitle === ''){
        alert('It not complete!!!!!')
    }else{
        saveCountdown = {title:countDownTitle,date:countDownDate};
        localStorage.setItem("countDown",JSON.stringify(saveCountdown));
        countDownValue = new Date(countDownDate).getTime();
        setUpTime();
    }
}

function setUpTime(){
    countDownActive = setInterval(()=>{
        //       time - currenttime
        const now = new Date().getTime();
        const distance = countDownValue - now;
        const days = Math.floor(distance/day);
        const hours = Math.floor((distance%day)/hour);
        const minutes = Math.floor((distance%hour)/minute);
        const seconds = Math.floor((distance%minute)/second);
        inputContainer.hidden = true;

        if(distance<0){
            countdownEl.hidden = true;
            completeEl.hidden = false;

            completeInfoEl.textContent = `${countDownTitle} Date ${countDownDate}`;
            clearInterval(countDownActive);
        }else{
            countdownTitleEl.textContent = `${countDownTitle}`;
            timeEl[0].textContent = `${days}`;
            timeEl[1].textContent = `${hours}`;
            timeEl[2].textContent = `${minutes}`;
            timeEl[3].textContent = `${seconds}`;
            countdownEl.hidden = false;
            completeEl.hidden = true;
        }


    },second);
}

function callData(){
    if(localStorage.getItem("countDown")){
        inputContainer.hidden = true;
        localStorage.JSON.parse(localStorage.getItem("countDown"));
        countDownTitle = saveCountdown.title;
        countDownDate.saveCountdown.date;
        countDownValue = new Date("countDownDate").getTime();
        setUpTime();
    }
}

function reset(){
    localStorage.removeItem("countDown");
    countdownEl.hidden = true;
    completeEl.hidden = true;
    inputContainer.hidden = false;
    clearInterval(countDownActive);
    countDownTitle = '';
    countDownDate = '';
}



countdownBtnEl.addEventListener('click',reset);
completeBtnEl.addEventListener('click',reset);
callData();