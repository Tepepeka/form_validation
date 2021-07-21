const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    //get the values from the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        //show error
        //add error class
        setErrorFor(username, "Username can't be blank");
    } else {
        //add success class
        setSuccessFor(username);
    }

    if(usernameValue === '') {
        setErrorFor(email, "Email can't be blank");
    } else if (!isEmail(email.value)) {
        setErrorFor(email, "Email is not valid");
    } else {
        setSuccessFor(email)
    }

    if(passwordValue === '') {       
        setErrorFor(password, "Password can't be blank");
    } else {
        setSuccessFor(password);
    }

    if(password2Value === '') {       
        setErrorFor(password2, "Password can't be blank");
    } else if(passwordValue !== password2Value) {
        setErrorFor(password2, "Password does not match");
    } else {
        setSuccessFor(password2);
    }

    //show a success message if u want

}

function setErrorFor(input, msg) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = msg;

    //add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input, msg) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = msg;

    //add error class
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}