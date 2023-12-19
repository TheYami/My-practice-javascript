const sliderCon = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-content');
const slideLeft = document.querySelector('.left-content');
const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');

const slideCount = slideRight.querySelectorAll('div').length; //จำนวน div ที่อยู่ใน right-content

let activeIndex = 0;

upBtn.addEventListener('click',()=>changeIme("up"));
downBtn.addEventListener('click',()=>changeIme("down"));

function changeIme(direction){
    const slideHeight = sliderCon.clientHeight;
    if(direction == "up"){
        activeIndex++;
        if(activeIndex>slideCount-1){
            activeIndex = 0;
        }
    }else if(direction == "down"){
        activeIndex--;
        if(activeIndex<0){
            activeIndex = slideCount-1;
        }
    }
    slideLeft.style.transform = `translateY(-${activeIndex*slideHeight}px)`
    slideRight.style.transform = `translateY(-${activeIndex*slideHeight}px)`
}