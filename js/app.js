const sign_in_btn = document.getElementById('sign-in-btn');
const sign_up_btn = document.querySelector('.sign-up-btn');
const container = document.querySelector('.container');
const username = document.getElementById('username');
const password = document.getElementById('password');
const repeat = document.getElementById('repeat__password');
const errorUsername = document.querySelector('.error__username');
const errorPassword = document.querySelector('.error__password');
const sing_up = document.getElementById('sing-up');

function validation(event) {
    event.preventDefault();

    let usernameValue = username.value; 
    let passwordValue = password.value;
    let repeatValue = repeat.value;

    errorUsername.innerHTML = "";
    errorPassword.innerHTML = "";

    let valid = true; 

    if (passwordValue !== repeatValue) {
        errorPassword.innerHTML = "Passwords do not match";
        errorPassword.style.display = 'block';
        valid = false;
    } 
    else if (passwordValue.length < 8) {
        errorPassword.innerHTML ='Password must be at least 8 characters long';
        errorPassword.style.display = 'block';
        valid = false;
    }

    if (!/[A-Z]/.test(usernameValue)) {
        errorUsername.innerHTML = 'Username must have at least one capital letter';
        errorUsername.style.display = 'block';
        valid = false;
    }

    if (valid) {
        alert('Registration was successful');
        // window.location.href = 'login.html';
        username.value = ""; 
        password.value = "";
        repeat.value = "";  
    } else {
        username.value = ""; 
        password.value = "";
        repeat.value = "";   
    }
}

sing_up.addEventListener('click', validation);
