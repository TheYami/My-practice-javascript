const header = document.getElementById('header')
const title= document.getElementById('title')
const description = document.getElementById('description')
const profile_img = document.getElementById('profile-img')
const profile_name = document.getElementById('name')
const price = document.getElementById('price')
const animate_bg = document.querySelectorAll('.animate_bg')
const animate_text = document.querySelectorAll('.animate_text')

setTimeout(showContent,2000);

function showContent(){
    header.innerHTML = `<img src="https://cdn.pixabay.com/photo/2016/06/07/17/15/yogurt-1442034_640.jpg" alt="img">`;
    title.innerHTML = 'strawbery';
    description.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, rem.';
    profile_img.innerHTML = `<img src="https://cdn.pixabay.com/photo/2016/11/23/17/25/woman-1853939_640.jpg" alt="img">`
    profile_name.innerHTML ='Juicy';
    price.innerHTML = '$250'

    animate_bg.forEach(el=>el.classList.remove('animate_bg'))
    animate_text.forEach(el=>el.classList.remove('animate_text'))
}