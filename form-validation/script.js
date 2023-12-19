const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password');
const password2 = document.getElementById('re-password');

form.addEventListener('submit',function(e){
    e.preventDefault();
    checkInput([userName,email,password1,password2]);
   
    if(!validateEmail(email.value.trim())){
        showError(email,'email is invaliable');
    }else{
        showSuccess(email);
    }
    checkPassword(password1,password2);
    checkLength(userName,5,10);
    checkLength(password1,5,12);
});


function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function checkInput(inputArray){
    inputArray.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,`please enter your ${getInputCase(input)}`);
        }else{
            showSuccess(input)
        }
    });
  }

  function getInputCase(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
  }


  function checkPassword(password1,password2){
    if(password1.value.trim() !== password2.value.trim()){
        showError(password2,'passwaord is different')
    }
  }

  function checkLength(input,min,max){
    if(input.value.length<=min){
        showError(input,`${getInputCase(input)} more than ${min} char`)
    }else if(input.value.length>max){
        showError(input,`${getInputCase(input)} less than ${max} char`)
    }else{
        showSuccess(input);
    }
  }
