const catagories = document.querySelectorAll('.catagory');

window.addEventListener('scroll',showCatagory);

function showCatagory(){
    const calcHeight = window.innerHeight-20;
    
    catagories.forEach(catagory=>{
        const topPosition = catagory.getBoundingClientRect().top;
        if(topPosition<calcHeight){
            catagory.classList.add('active')
        }else{
            catagory.classList.remove('active')
        }
    })
}