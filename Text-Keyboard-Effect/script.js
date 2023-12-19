const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');

const text = 'Welcome To My Webpage'
let speed = 300/speedEl.value;

let charectorId = 1;

writeText();

function writeText(){
    textEl.innerText = text.slice(0,charectorId)
    charectorId++;

    if(charectorId>text.length){
        charectorId = 1
    }

    setTimeout(writeText,speed)
}

speedEl.addEventListener('input',(e)=>{
        speed = 300/e.target.value;
});