const SpeechRecognize = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognize = new SpeechRecognize();
const btn = document.querySelector('.control');

function recordVoid(){
    const isRecord = btn.classList.contains('record');

    if(isRecord){
        recognize.start();        //start record
        btn.classList.remove('record');
        btn.classList.add('puase');
        btn.innerText = "Puase";
    }else{
        recognize.stop();         //stop record
        btn.classList.remove('puase');
        btn.classList.add('record');
        btn.innerText = "Record"
    }
}


function setUpVoid(){
    recognize.lang = "th-TH"  //set ภาษาไทย
    btn.addEventListener('click',recordVoid);
    recognize.addEventListener('result',setVoidTotext)  //result แปลงเสียงเป็นข้อความ
    recognize.addEventListener('end',continueRecord);
}


function setVoidTotext(e){
    let message = document.querySelector('.message');
    message.innerText += e.results[0][0].transcript;
}

function continueRecord(){
    const isPuase = btn.classList.contains('puase');
    if(isPuase){
        recognize.start();
    }
}

setUpVoid();