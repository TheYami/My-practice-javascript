var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
var time = new Date();

setInterval(() => {
    var time = new Date();

    hours.innerHTML = (time.getHours()<10?"0":"") + time.getHours()
    minutes.innerHTML = (time.getHours()<10?"0":"") + time.getMinutes()
    seconds.innerHTML = (time.getSeconds()<10?"0":"") + time.getSeconds()
},1000)


hours.innerHTML = time.getHours()
minutes.innerHTML = time.getMinutes()
seconds.innerHTML = time.getSeconds()