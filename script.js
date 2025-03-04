//setting admin details
// let adminEmail= "sharmeengardi@gmail.com";
// let adminPassword = "Admin@Pass123"


let adminDetails = {
    adminEmail: "sharmeengardi@gmail.com",
    adminPassword: "Admin@Pass123"
}


localStorage.setItem("adminData", JSON.stringify(adminDetails)); // Save current 









// ======================================Toggle from signup page to login page
function login() {
    console.log("working");
    window.location = "/index.html"

}

// ======================================Toggle from login page to signup page
function signup() {
    window.location = "pages/signup.html"
}

// ==============================================Password hide and show
// for login
function passwordHideShowLogin() {
    let showPassword = document.getElementById("viewpassword");
    let password = document.getElementById("user-password-login");
    if (password.type === "password") {
        password.type = "text";
        showPassword.style.color = "blue";
    } else if (password.type === "text") {
        password.type = "password";
        showPassword.style.color = "black";
    }
}
// for signup
function passwordHideShow() {
    let showPassword = document.getElementById("viewpassword");
    let password = document.getElementById("user-password");
    if (password.type === "password") {
        password.type = "text";
        showPassword.style.color = "blue";
    } else if (password.type === "text") {
        password.type = "password";
        showPassword.style.color = "black";
    }
}

//=======================================login page========================================

function handleLogin() {
    let users = JSON.parse(localStorage.getItem("users")) || []; // Users array

    let admin = JSON.parse(localStorage.getItem("adminData"));

    var enteredEmail = document.getElementById("email-login").value; // Get input values
    var enteredPassword = document.getElementById("user-password-login").value;

    let currentUser = users.find(user => user.userEmail === enteredEmail && user.userPassword === enteredPassword);
    let checkAdmin = (admin.adminEmail === enteredEmail && admin.adminPassword === enteredPassword);

    // localStorage.setItem("loggedUser", JSON.stringify({

    // }));//



    if (checkAdmin) {
        window.location = "/Admin/admin.html" // add location
    }
    else if (currentUser) {
        localStorage.setItem("currentUser", JSON.stringify(currentUser)); // Save current user

        // localStorage.setItem("loggedUser", JSON.stringify(loggedInUser));
        window.location = "/pages/startQuiz.html"; // Redirect to Start 
        // loadLeaderboardData();
    }
    else {
        alert("Incorrect email or password!");
    }
}




//=======================================  handle signup  ==================================
// Handle the signup process
function handleSignup() {

    let users = JSON.parse(localStorage.getItem("users")) || [];            //users array

    var name = document.getElementById("name-signup").value;
    var email = document.getElementById("email-signup").value;         //get input values
    var password = document.getElementById("user-password").value;

    let userExists = users.some(user => user.userEmail === email);



    // Call validateSignup and pass the values
    if (validateSignup(name, email, password)) {
        const newUser = {
            userName: name,
            userEmail: email,
            userPassword: password
        };

        // Store the new user in localStorage
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        if (userExists) {
            alert("User Already exists");                                    //user exists
        }
        else {
            window.location = "/index.html";            //redirect to login page
        }

    }
}

// Validate user input in the signup form
function validateSignup(name, email, password) {

    let invalidMsgFullName = document.getElementById("invalid-name");
    let invalidMsgPassword = document.getElementById("invalid-password");
    let invalidMsgEmail = document.getElementById("invalid-email");

    // Regex patterns for validation
    let reqName = /^[a-zA-Z ]+$/; // Name: Only letters and spaces
    let reqEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Email: Valid email format
    let reqPass = /^(?=.*\d)(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // Password: At least one number, one uppercase, one special character, and between 6 to 20 characters
    let checkbox = document.getElementById("check-box").checked; // Terms and conditions checkbox

    // Clear previous error messages
    invalidMsgFullName.innerHTML = "";
    invalidMsgPassword.innerHTML = "";
    invalidMsgEmail.innerHTML = "";

    // Name validation
    if (name === "" || !reqName.test(name)) {
        invalidMsgFullName.innerHTML = "Enter a valid Name";
        return false;
    }


    // Email validation
    if (email === "" || !reqEmail.test(email)) {
        invalidMsgEmail.innerHTML = "Enter a valid Email";
        return false;
    }

    // Password validation
    if (password === "" || !reqPass.test(password)) {
        invalidMsgPassword.innerHTML = "Password must contain at least one uppercase letter, one lowercase letter, one special character, and be 6-20 characters long.";
        return false;
    }

    // Terms and Conditions checkbox validation
    if (!checkbox) {
        alert("Please check the terms and conditions");
        return false;
    }


    return true; // Everything is valid
}

// Real-time validation for name, email, and password
document.getElementById("name-signup").addEventListener("input", function () {
    let name = this.value;
    let invalidMsg = document.getElementById("invalid-name");
    let reqName = /^[a-zA-Z ]+$/;
    invalidMsg.innerHTML = reqName.test(name) ? "" : "Enter a valid Name";
});

document.getElementById("email-signup").addEventListener("input", function () {
    let email = this.value;
    let invalidMsg = document.getElementById("invalid-email");
    let reqEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
 
    invalidMsg.innerHTML = reqEmail.test(email) ? "" : "Enter a valid Email";
});

document.getElementById("user-password").addEventListener("input", function () {
    let password = this.value;
    let invalidMsg = document.getElementById("invalid-password");
    let reqPass = /^(?=.*\d)(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    invalidMsg.innerHTML = reqPass.test(password) ? "" : "Password must contain at least one uppercase letter, one lowercase letter, one special character, and be 6-20 characters long.";
});




// ===================================== start quiz page to quiz ================================================

function startQuizbutton() {

    // console.log("function called");
    window.location = "/pages/quiz.html";
}


function loadLeaderboardData() {
    let userInitials = JSON.parse(localStorage.getItem("currentUser"));
    // console.log(userInitials)
    
    let userinitName = userInitials.userName;
    // console.log(userinitName)
    
    let displayUserInitial = document.getElementById("initials");
    
    displayUserInitial.innerHTML = userinitName;
    console.log("load funtion called")
}


//menu on avatar click
function usermenu() {

    let userMenu = document.getElementById("menu");
    let existingMenu = document.querySelector(".menu");


    if (existingMenu) {
        existingMenu.remove(); // Hide menu if it exists (Second Click)
    } else {
    userMenu.innerHTML += `<div class="menu" >
                    <p id="menuUserName"></p>
                    <div class="edit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                          </svg>
                        <p>Edit</p>
                    </div>
                    <div class="logout">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-power" viewBox="0 0 16 16">
                            <path d="M7.5 1v7h1V1z"/>
                            <path d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812"/>
                          </svg>
                        <p onclick= "initiateLogout()">Logout</p>
                    </div>
                </div>`

    

    let userInitials = JSON.parse(localStorage.getItem("currentUser"));
    // console.log(userInitials)

    let userinitName = userInitials.userName;
    // console.log(userinitName)

    // let displayUserInitial = document.getElementById("initials");
    let menuUserName = document.getElementById("menuUserName");

    menuUserName.innerHTML = userinitName;
    }

}

function initiateLogout(){
    let checkCurrentUeser = JSON.parse(localStorage.getItem("currentUser"));
    console.log(checkCurrentUeser)

    localStorage.removeItem("currentUser"); // Removes only the "username" key

    window.location = "/index.html"

}



///arrow============================================================================================================


// // Add the sticky class to the navbar when you reach its scroll position. Remove the sticky class when you leave the scroll position.
// function myFunction() {

// // Get the navbar
// const navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// const sticky = navbar.offsetTop;

//     console.log("funtion called scroll")
//   if (window.scrollY >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }



function pageUpDown() {

    const scrollButton = document.getElementById("pg-position")
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
    });

}
//===============================================================================

// =================================== Leaderboard=========================================================

// in quiz.js
