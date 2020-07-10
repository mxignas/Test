// SELECTING ALL TEXT ELEMENTS
let username = document.getElementById("username");
let password = document.getElementById("password");
let email = document.getElementById("email");
let number = document.getElementById("number");

// SELECTING ALL ERROR DISPLAY ELEMENTS
let name_error = document.getElementById("name_error");
let password_error = document.getElementById("password_error");
let email_error = document.getElementById("email_error");
let number_error = document.getElementById("number_error");


///////////// VALIDATIONS FUNCTIONS ////////////// 
let passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.{6,})"); // password regex
let emailRegex = new RegExp ("^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,}"); // email regex

function Validate() {
  // Check if username input is null
  if (username.value == "") {
    username.style.border = "1px solid red";
    document.getElementById("username_div").style.color = "red";
    name_error.textContent = "Username is required";
    return false;
  }


  // validate username
  if (username.value.length < 3) { // if length is less than 3
    username.style.border = "1px solid red";
    document.getElementById("username_div").style.color = "red";
    name_error.textContent = "Username must be at least 3 characters";
    return false;
  }



  if (password.value == "") {
    password.style.border = "1px solid red";
    document.getElementById("password_div").style.color = "red";
    password_error.textContent = "Password is required";
    return false;
  }
  
  // Password validation
  if (!passwordRegex.test(password.value)) { // testing the password regex with password value
    password.style.border = "1px solid red";
    document.getElementById("password_div").style.color = "red";
    password_error.textContent = "Password has to be atleast 6 characters with one Capital letter";
    return false;
  }

  // Check if email input is null
  if (email.value == "") {
    email.style.border = "1px solid red";
    document.getElementById("email_div").style.color = "red";
    email_error.textContent = "Email is required";
    return false;
  }

   // Check if email input valid
   if (!emailRegex.test(email.value)) { // testing the email regex
    email.style.border = "1px solid red";
    document.getElementById("email_div").style.color = "red";
    email_error.textContent = "Email has to contain @ to be valid";
    return false;
  }

    // Check if number input is null
  if (number.value == "" ) {
    number.style.border = "1px solid red";
    document.getElementById("number_div").style.color = "red";
    number_error.textContent = "Phone number is required";
    return false;
  }
  return true;
}



// Checking if input is gone through validation
function nameVerify() {
  // if username validated correctly, change its style
  if (username.value != "" && username.value.length >= 3) {
    username.style.border = "1px solid green";
    document.getElementById("username_div").style.color = "#000000";
    name_error.innerHTML = "";
    return true;
  }
}

function passwordVerify() {
    // if password validated correctly, change its style
  if (password.value != "" && passwordRegex.test(password.value)) {	
    password.style.border = "1px solid green";
    document.getElementById("password_div").style.color = "#000000";
    password_error.innerHTML = "";
  	return true;
  }
}

function emailVerify() {
    // if email validated correctly, change its style
  if (email.value != "" && emailRegex.test(email.value)) {
    email.style.border = "1px solid green";
    document.getElementById("email_div").style.color = "#000000";
    email_error.innerHTML = "";
  	return true;
  }
}

function numberVerify() {
    // if number validated correctly, change its style
  if (number.value != "" && number.value.length >= 9) {
    number.style.border = "1px solid green";
    document.getElementById("number_div").style.color = "#000000";
    number_error.innerHTML = "";
  	return true;
  }
}




