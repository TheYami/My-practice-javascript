const register = document.getElementById('register');
const startBtn = document.getElementById('start');
const formPlayer = document.getElementById('form');
const player = document.getElementById('player');
const nameShow = document.getElementById('nameshow');
const formNumber = document.getElementById('guess-number');
const inputGuess = document.getElementById('form-guess');
const list = document.getElementById('list');
const answer = document.getElementById('result');
const scores = document.getElementById('scores');




function showRegister(){
    register.classList.add('active');
}

showRegister();

function readyToPlay(){
    register.classList.remove('active')
}

function enterYourName(e){
    e.preventDefault();
    if(player.value.trim() === ''){
        alert('กรุณาป้อนชื่อด้วยจ้ะ')
    }else{
        const playerName = player.value;
        nameShow.innerHTML = playerName;
        readyToPlay();
    }
}


let remainingAttempts = 5;
let score = 100;


const randomResult = Math.floor((Math.random()*100)+10);
console.log(randomResult);

function checkData(e){
    e.preventDefault();
    if(inputGuess.value.trim() === ''){
        alert('กรุณาป้อนตัวเลขที่จะทาย')
    }

    remainingAttempts--;

    if (+inputGuess.value === randomResult) {
        list.innerHTML = `ยินดีด้วย! คุณทายถูกต้อง `;
        scores.innerHTML = `คะแนนของคุณคือ ${score}`
        answer.innerHTML = randomResult;
        resetGame();
      } else if (+inputGuess.value < randomResult) {
        score = score-20;
        list.innerHTML = 'ตัวเลขที่ทายน้อยเกินไป';
      } else {
        score = score-20;
        list.innerHTML = 'ตัวเลขที่ทายมากเกินไป';
      }

    
      if (remainingAttempts === 0) {
        list.innerHTML = ` เลขที่ถูกคือ ${randomResult}`;
        scores.innerHTML = `คะแนนของคุณคือ ${score}`
        answer.innerHTML = randomResult;
        resetGame();
      }
}

function resetGame() {
    remainingAttempts = 5;
    score = 0;
  }

formPlayer.addEventListener('submit',enterYourName);
formNumber.addEventListener('submit',checkData);
