const currencyOne = document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-two');

const amountOne = document.getElementById('amount-one');
const amountTwo = document.getElementById('amount-two');

const rateText = document.getElementById('rate');
const button = document.getElementById('btn');

currencyOne.addEventListener('change',calcurateMoney);
currencyTwo.addEventListener('change',calcurateMoney);
amountOne.addEventListener('input',calcurateMoney);
amountTwo.addEventListener('input',calcurateMoney);

function calcurateMoney(){
    const one = currencyOne.value;
    const two = currencyTwo.value;

    //เรียก api
    fetch(`https://api.exchangerate-api.com/v4/latest/${one}`)
    .then(res=>res.json()).then(data=>{
        const rate=data.rates[two];
        rateText.innerText=`1 ${one} = ${rate} ${two}`;

        //calcurate
        amountTwo.value=(amountOne.value*rate).toFixed(2);
    })
}

button.addEventListener('click',()=>{
    const temp = currencyOne.value; // เก็บค่าสกุลเงินต้นทางชั้วคราว
    currencyOne.value=currencyTwo.value;
    currencyTwo.value = temp;
    calcurateMoney();
})

calcurateMoney();

