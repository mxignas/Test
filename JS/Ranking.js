function getUsers() {
    if(localStorage === undefined){ // if local storage is empty return nothing
        return [];
    }
    else {
        return localStorage; // return users as an object
       }
}

function ranking() {
    let usrArray = getUsers();
    let email = sessionStorage.loggedInUsrEmail; // email to get to the userObj
    let score = localStorage.getItem("score"); // score from game
    let userObj = JSON.parse(localStorage[email]); // converting to object to get inside an logged in user obj

    // creating table for rankings
    let htmlStr = "<table><thead><tr><th colspan=2>Rankings table </th></tr></thead><tbody><tr><td>Username</td><td> Top Score</td></tr>";
    
    if(sessionStorage.loggedInUsrEmail === userObj.email){ // if logged in user email matches with current user in object
        if(userObj.topScore < score){ // if current topScore is less than just obtained score
            userObj.topScore = score; // make topScore become score
            localStorage[userObj.email] = JSON.stringify(userObj); // pass it to localStorage userObj
            localStorage.removeItem("score"); // remove score from localStorage for new game
        }
    }

    let UserArray = []; // creating an array for users
    UserArray.push(userObj); // push userObj to an array

    for(let j = 0; j < usrArray.length; j++) { // loop to check which user is logged in and display his topscore
        htmlStr += "<tr><td>" + UserArray[j]["username"] + "</td><td>" + UserArray[j]["topScore"] + "</td></tr>";

        document.getElementById("ranking").innerHTML = htmlStr; // geting element by id where to display
    }
    htmlStr += "</table>";
}

window.onload = ranking();