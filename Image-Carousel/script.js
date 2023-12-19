const container = document.getElementById('container');
const imgs = document.querySelectorAll('#container img');

const left = document.getElementById('left')
const right = document.getElementById('right')

let idx = 0; //สร้างตัวนับภาพ

let interval = setInterval(slide,2000); //สร้าง slide อัตโนมัติ ทุกๆ 2วินาที

function slide(){
    idx++;
    chageImage();
}

function chageImage(){

    if(idx>imgs.length-1){
        idx = 0;
    }else if(idx<0){
        idx = imgs.length-1;
    }
    container.style.transform = `translateX(${-idx*500}px)`
}

function resetInterval(){
    clearInterval(interval);
    interval = setInterval(slide,2000);
}

left.addEventListener('click',()=>{
    idx--;
    chageImage();
    resetInterval();
});

right.addEventListener('click',()=>{
    idx++;
    chageImage();
    resetInterval();
})