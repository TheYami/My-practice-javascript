const count = 10;
const apiKey = 'sFmQEKWUag3GWG2JC-_Iux5g8PgSSooiX0-Ojcf9iUE';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

const imageContainer = document.getElementById('img-container');
let photoArr = [];

async function getPhoto(){
    try{
        const response = await fetch(apiUrl);
        photoArr = await response.json();
        displayImage();
    }catch(err){
        console.log(err);
    }
}

function displayImage(){
    photoArr.forEach((photo)=>{
        const item = document.createElement('a');
        item.setAttribute('href',photo.links.html);
        item.setAttribute('target','_blank');

        const img = document.createElement('img');
        img.setAttribute('src',photo.urls.regular);
        img.setAttribute('title',photo.alt_description);
        img.setAttribute('alt',photo.alt_description);

        item.appendChild(img);
        imageContainer.appendChild(item);
    })
}

getPhoto();

window.addEventListener('scroll',()=>{
    if(window.innerHeight+window.scrollY >= document.body.offsetHeight-100){
        getPhoto();
    }
})