var balance = document.getElementById('balance');
var money_income = document.getElementById('money-income');
var money_expense = document.getElementById('money-expense');
var list = document.getElementById('list');
var form = document.getElementById('form');
var text = document.getElementById('text');
var amount = document.getElementById('amount');


var transactions = [];

function init(){
    list.innerHTML = '';
    transactions.forEach(addDataToList);
    calcurateMoney();
}

function addDataToList(transactions){
    const symbol= transactions.amount<0 ? '-':'+';
    const status = transactions.amount<0?'minus':'plus';
    const item = document.createElement('li');
    const result = formatNumber(Math.abs(transactions.amount));
    //item.innerHTML = 'Car repair costs <span>- ฿400</span><button class="delete-btn">x</button>'
    item.classList.add(status);
    item.innerHTML = `${transactions.text}<span>${symbol}${result}</span><button class="delete-btn" onclick = "removeData(${transactions.id})">x</button>`;
    list.appendChild(item)
}

function formatNumber(num){
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function autoId(){
    return Math.floor(Math.random()*100000000);
}

function calcurateMoney(){
    const amounts = transactions.map(transactions => transactions.amount);
    //คำนวนยอดคงเหลือ
    const totals = amounts.reduce((result,item) => (result+=item),0).toFixed(2);
    //คำนวน income
    const incomes = amounts.filter(item => item>0).reduce((result,item) => (result+=item),0).toFixed(2);
    //คำนวนรายจ่าย
    const expenses = (amounts.filter(item => item<0).reduce((result,item) => (result+=item),0)*-1).toFixed(2);

    balance.innerText = formatNumber(totals);
    money_income.innerText = formatNumber(incomes);
    money_expense.innerText = formatNumber(expenses);
}

function addTransactions(e){
    e.preventDefault();
    if(text.value.trim()==='' || amount.value.trim() === ''){
        alert('please add the transaction')
    }else{
        const data = {
            id : autoId(),
            text : text.value,
            amount: +amount.value
        }
        transactions.push(data);
        addDataToList(data);
        calcurateMoney();
        text.value = '';
        amount.value = '';
    }
}

function removeData(id){
    transactions.filter(transactions => transactions.id !== id);
    init();

}

form.addEventListener('submit',addTransactions);

