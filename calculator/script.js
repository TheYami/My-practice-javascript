const calcDisplay = document.querySelector('h1');
const inputBtn = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

const calculate = {
    "/":(firstNumber,secondNumber) => secondNumber!=0?firstNumber/secondNumber:'error',
    "*":(firstNumber,secondNumber) => firstNumber*secondNumber,
    "+":(firstNumber,secondNumber) => firstNumber+secondNumber,
    "-":(firstNumber,secondNumber) => firstNumber-secondNumber,
    "=":(firstNumber,secondNumber) => secondNumber
}

let firstValue = 0;
let operatorValue = '';
let waitForNext = false;

function setNumberValue(number){
    if(waitForNext){
        calcDisplay.textContent = number;
        waitForNext = false;
    }else{     
        const displayValue = calcDisplay.textContent;
        calcDisplay.textContent = displayValue === '0' ? number:displayValue+number;
    }
}

function callOperator(operator){
    const currentValue = Number(calcDisplay.textContent);
    if(operatorValue && waitForNext){
        operatorValue = operator;
        return;
    }
    if(!firstValue){
        firstValue = currentValue;
    }else{
        const result = calculate[operatorValue](firstValue,currentValue);
        calcDisplay.textContent = result;
        firstValue = result;
        if(firstValue === "error"){
            resetAll();
        }
    }
    operatorValue = operator;
    waitForNext = true;
}

function addDecomal(){
    if(waitForNext) return;
    if(!calcDisplay.textContent.includes(".")){
        calcDisplay.textContent = `${calcDisplay.textContent}.`;
    }
}

inputBtn.forEach((input)=>{
    if(input.classList.length === 0){
        input.addEventListener('click',()=>setNumberValue(input.value));
    }else if(input.classList.contains("operator")){
        input.addEventListener('click',()=>callOperator(input.value));
    }else if(input.classList.contains("decimal")){
        input.addEventListener('click',()=>addDecomal());
    }
});

function resetAll(){
    firstValue = '0';
    operatorValue = '';
    waitForNext = false;
    calcDisplay.textContent = '0';
}

clearBtn.addEventListener('click',()=>resetAll());