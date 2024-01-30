const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// show error
const showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    formControl.lastElementChild.textContent = message
}

// show success
const showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// isValid email
const checkEmail = (input) => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(re.test(input.value.trim().toLocaleLowerCase())){
        showSuccess(input)
    }else{
        showError(input, 'Email is not valid')
    }
}

// Check Required
const checkRequired = (inputArr) => {
    inputArr.forEach(input => {
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`);
        }else{
            showSuccess(input);
        }
    });
};

// Check Lenght
const checkLength = (input, min, max) => {
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }else if (input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    }else{
        showSuccess(input);
    }
}

// Check Password Match
const checkPasswordMath = (input1, input2) => {
    if(input1.value !== input2.value){
        showError(input2, 'Password do not match');
    }
}


// get field Name
const getFieldName = (input) => {
    return input.id[0].toUpperCase() + input.id.slice(1);
}


const submitForm = (e) => {
    e.preventDefault();

    checkRequired([userName, email, password, password2]);
    checkLength(userName, 3, 15);
    checkLength(password, 8, 25);
    checkEmail(email);
    checkPasswordMath(password, password2);
    // if(userName.value.trim() === ''){
    //     showError(userName, 'Username is required');
    // }else if(userName.value.length < 6){
    //     showError(userName, 'Enter at least 6 characters');
    // }else{
    //     showSuccess(userName);
    // }

    // if(email.value.trim() === ''){
    //     showError(email, 'Email is required');
    // } else if(!isValidEmail(email.value)){
    //     showError(email, 'Email is not valid');
    // } else {
    //     showSuccess(email);
    // }
    

    // if(password.value.trim() === ''){
    //     showError(password, 'Password is required');
    // } else if(password.value.length < 6){
    //     showError(password, 'Enter at least 6 characters');
    // } else {
    //     showSuccess(password);
    // }

    // if(password2.value.trim() === ''){
    //     showError(password2, 'Password 2 required');
    // } else if(password2.value.length < 6){
    //     showError(password2, 'Enter at least 6 characters');
    // } else {
    //     showSuccess(password2);
    // }
}






form.addEventListener('submit', submitForm);