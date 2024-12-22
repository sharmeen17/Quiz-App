// Toggle from signup page to login page
function login() {
    window.location = "pages/login.html"
}

// Toggle from login page to signup page
function signup() {
    window.location = "/index.html"
}

// Password hide and show
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

function handleLogin(){

    let users = JSON.parse(localStorage.getItem("users")) || [];            //users array

    var enteredEmail = document.getElementById("email-login").value;         //get input values
    var enteredPassword = document.getElementById("user-password-login").value;

    let userEmailMatches = users.some(user => user.userEmail === enteredEmail);
    let userPasswordMatches = users.some(user => user.userPassword === enteredPassword);

    if (userEmailMatches||userPasswordMatches) {
        window.location = "/pages/startQuiz.html";            //redirect to Start quiz
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
            window.location = "/pages/login.html";            //redirect to login page
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
    console.log("function called");
    window.location = "/pages/quiz.html";
}



// =================================== Leaderboard=========================================================



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