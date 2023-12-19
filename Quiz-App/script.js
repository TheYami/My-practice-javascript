const questionData = [
	{
	  question:"1.ข้อใดไม่ใช่ระบบปฏิบัติการ",
      a:"ระบบปฏิบัติการดอส",
      b:"ไมโครซอฟท์เวิร์ด",
      c:"ไมโครซอฟต์วินโดวส์",
      d:"ระบบปฏิบัติการแอนดรอยด์",
      correct:"b"
	},
    {
        question:"2.ข้อใดคือโปรแกรม Web Browser",
        a:"Google Chrome",
        b:"Keyboard",
        c:"Mouse",
        d:"Monitor",
        correct:"a"
    },
    {
        question:"3.ข้อใดคือฮา์ดแวร์",
        a:"Keyboard",
        b:"Mouse",
        c:"Monitor",
        d:"ถูกทุกข้อ",
        correct:"d"
    }
];

const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const a = document.getElementById('a-text');
const b = document.getElementById('b-text');
const c = document.getElementById('c-text');
const d = document.getElementById('d-text');

const btn = document.getElementById('submit');
const container = document.getElementById('quiz');

let currentQuestion = 0;
let score = 0;
loadQuestion();


function loadQuestion(){
    checkchoice();
    const currentQuiz = questionData[currentQuestion];
    questionEl.innerText = currentQuiz.question;
    a.innerText = currentQuiz.a;
    b.innerText = currentQuiz.b;
    c.innerText = currentQuiz.c;
    d.innerText = currentQuiz.d;
}

function checkchoice(){
    answerEls.forEach(answerEl => answerEl.checked = false);
}

btn.addEventListener('click',()=>{
    let answer = getChoice();
    if(answer){
        if(answer === questionData[currentQuestion].correct){
            score++;
            
        }
        currentQuestion++;
        if(currentQuestion<questionData.length){
            loadQuestion();
        }else{
            container.innerHTML = `<h2>Your Score = ${score}/${questionData.length}</h2>`
        }
    }
})

function getChoice (){
    let answer;
    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer = answerEl.id
        }
    });
    return answer
}