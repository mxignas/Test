
function storeUser() {
    if(Validate()){ // validate goes through

    // object that we are going to store
    let userObj = {};
    userObj.username = document.getElementById("username").value;
    userObj.password = document.getElementById("password").value;
    userObj.email = document.getElementById("email").value;
    userObj.number = document.getElementById("number").value;
    userObj.topScore = localStorage.getItem("Score"); // getting value from Game.js

    localStorage[userObj.email] = JSON.stringify(userObj); // [] because I need contents

    }
    return true;
}


// making sure that it goes through validation on register button click.
function validTrue() {
    if(nameVerify() && passwordVerify() && emailVerify() && numberVerify()) {
        alert("You have sucessfully registered");
        window.location.href = "http://localhost/index.php"; // going to game page
    }
}
