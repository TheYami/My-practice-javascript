const videoEL = document.getElementById('video');
const request = document.getElementById('request');
const share = document.getElementById('share');

request.addEventListener('click',()=>{
    selectMediaScreen();
});

share.addEventListener('click',async ()=>{
    share.disabled=true;
    await videoEL.requestPictureInPicture();
    share.disabled = false;
});

async function selectMediaScreen(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoEL.srcObject = mediaStream;
        videoEL.onloadedmetadata=() =>{
            videoEL.play();
        }
    }catch(error){
        console.log('error');
    }
}