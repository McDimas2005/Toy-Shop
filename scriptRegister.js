let errorMessage = document.getElementById('wrong-Input');

function validation(){
    let name = document.getElementById('name-input').value;
    let gender = document.getElementsByName('input-gender');
    let DOB = document.getElementById('input-date').value;
    let email = document.getElementById('email-input').value;
    let password = document.getElementById('password-input').value;
    let agreement = document.getElementById('input-agreement');   
    
    if(nameValidation(name) == false){
        return
    }
    else if(genderValidation(gender)== false){
        return;
    }
    else if(dateValidation(DOB)== false){
        return;
    }
    else if(emailValidation(email) == false){
        return;
    }
    else if(passwordValidation(password) == false){
        return;
    }
    else if(aggrementValidation(agreement)== false){
        return;
    }
    else{
        errorMessage.innerHTML = "Successfully Create Account";
    }
}

function dateValidation(DOB){
    let dateChoosen = DOB;
    // for (let index = 0; index < DOB.length; index++) {
    //     if (DOB[index].checked) {
    //         dateChoosen = DOB[index].value;
    //     }
    // }
    if(dateChoosen == ""){
        errorMessage.innerHTML = "Remember Your Birthday?";
        return false;
    }
    return true;
}

function nameValidation(name){
    if (name.length < 4) {
        errorMessage.innerHTML = "Sorry, your name <br>is less than 4 characters";
        return false;
    }
    return true;
}

function genderValidation(gender){
    let genderChoosen = "";
    for (let index = 0; index < gender.length; index++) {
        if (gender[index].checked) {
            genderChoosen = gender[index].value;
        }
    }
    if(genderChoosen==""){
        errorMessage.innerHTML = "Not choose the gender yet";
        return false;
    }
    return true;
}

function emailValidation(email) {
    if (email.includes('@email.com')) {
        return true;
    }
    else{
        errorMessage.innerHTML = "Don't forget <br> @email.com in your email";
        return false;
    }
}

function passwordValidation(password) {
    if (password.length < 3) {
        errorMessage.innerHTML = "Your password is <br>less than 3 characters";
        return false;
    }
    return true;
}

function aggrementValidation(agreement){
    if(agreement.checked == false){
        errorMessage.innerHTML = "No agree with our agreement?"
        return false;
    }
    return true;
}
