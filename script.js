// select items 
const btn = document.querySelector('btn')
const success = document.querySelector('success')
const error = document.querySelector('.error')
const form = document.querySelector('form')

// btn 

btn.addEventListener('click', function validation (e) {
    let email = document.getElementById("email").ariaValueMax;
    let regx =  /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?/
    // console log (email)
    e.preventDefault()
        if (email.match(regx)){
            return successResult();

        } else{
            if (email === ""){
                emptyError();
            } else{
                validationError();
            }
        }
})

function successResult () {
    if (success.classList.contains('hide')){
        success.classList.remove('hide');
    }

    success.innerHTML = `<p> Thanks for submiting<p>`;
        success.style.display = 'block';
        setTimeout(() => {
            success.classList.add('hide')
        }, 1500)
}

function validationError(){
    if(error.classList.contains('hide')){
        error.classList.remove('hide');
    }
    error.innerHTML = `<p>Email format is not valid<p> <img src="images/icon-error.svg" alt="error">`;

    error.style.display = 'flex'
    setTimeout (() => {
        error.classList.add('hidee')
    }, 1500)
}