const button = document.querySelector('button')
const result = document.getElementById('result')

button.addEventListener('click',()=>{
    const date1 = document.getElementById('date-1') .value
    const date2 = document.getElementById('date-2') .value
    const startDate = new Date(date1)
    const endDate = new Date(date2)

    const time = Math.abs(endDate - startDate)

    const days = Math.round(time/(1000*60*60*24))

    result.innerHTML = "ห่างกัน :" + days + "วัน"
})