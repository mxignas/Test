
function login() {
    
    // Getting email address
    let email = document.getElementById("email").value;
    let EmailB = document.getElementById("email"); // For borders
    document.getElementById("User").style.color = "red";

    // If user doesnt have an account
    if(localStorage[email] === undefined) {
        EmailB.style.border = "1px solid red";
        document.getElementById("User").innerHTML = "User is not recognized. Please check your E-mail";
        return; // do nothing else

    } else { // User has an account
        let userObj = JSON.parse(localStorage[email]); // converting to object so we can access it
        let password = document.getElementById("password").value;

        let PasswordB = document.getElementById("password"); // For borders
        

        if(password === userObj.password){  // if password input matches the Object password
        alert("You have succesfully logged in");
        sessionStorage.loggedInUsrEmail = userObj.email; // clearing failed log in's
        window.location.href = "http://localhost/game.php"; // going to game page

        } else { // Incorrect password
            PasswordB.style.border = "1px solid red";
            document.getElementById("User").innerHTML = "Incorrect password";
        
        }
    }
}


//Check if logged in at the moment.
function checkLogin() {
    if(sessionStorage.loggedInUsrEmail !== undefined) { //if not undefined then display who it is
        //extract details of logged in user
        let userObj = JSON.parse(localStorage[sessionStorage.loggedInUsrEmail]);

        document.getElementById("usertxtarea").innerHTML = userObj.email + " Logged in"; // display whos logged in
        document.getElementById("userButton").style.visibility = "visible"; // make button visible
    }
}


// Log out
function logout() {
    if(sessionStorage.loggedInUsrEmail !== undefined) { // If logged in
        sessionStorage.removeItem("loggedInUsrEmail"); // remove user from session storage (which makes it not logged in)
        alert("You have succesfully logged out");
        localStorage.removeItem("score"); // Deleting score from localStorage for other user to log in and have his own
        location.reload();
    }
}

window.onload = login; 
window.onload = checkLogin; 