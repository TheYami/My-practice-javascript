const ratingContainer = document.querySelector('.rating-container');
const rating = document.querySelectorAll('.rating');
const panel = document.getElementById('panel');
const btn = document.getElementById('send');

let selected;

ratingContainer.addEventListener('click',(e)=>{
    if(e.target.parentNode.classList.contains('rating')) //เช็คว่าเราคลิกที่ rating ตัวไหน
    removeActive();
    e.target.parentNode.classList.add('active');
    selected = e.target.nextElementSibling.innerHTML; //ดึงเอาข้อมูลของข้อความ(พอใจมาก เฉยๆ ไม่พอใจ)มาใช้
});


function removeActive(){
    for(i=0;i<rating.length;i++){
        rating[i].classList.remove('active')
    }
};

btn.addEventListener('click',()=>{
    panel.innerHTML = `
    <img src="img/heart.svg" alt="img" class='heart'>
    <strong>ขอบคุณที่ใช้บริการของเรา</strong>
    <br>
    <strong>ผลการประเมิน : ${selected}`
})