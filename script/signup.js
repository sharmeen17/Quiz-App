
// function login(){
//     window.location = "index.html";
//     console.log("functioncalled")
// }

// function handleSignup() {
//     var signupButton = document.getElementById("signup-button");
//     var userName = document.getElementById("name-signup").value;
//     var userEmail = document.getElementById("email-signup").value;
//     var userPassword = document.getElementById("user-password").value;

//     let users = JSON.parse(localStorage.getItem("users")) ||[]

//     // Creating new user object
//     const newUser = {
//         name: userName,
//         email: userEmail,
//         password: userPassword
//     };

//     // Adding new user to the array of users
//     users.push(newUser);

//     localStorage.setItem("users", JSON.stringify(users));

//     // 1. localStorage -> user 
//     // 2. parse
//     // 3. users = []
//     // 4. localstorage set
//     // 5. redirect login
// }

// function passwordHideShow() {
//     let showPassword = document.getElementById("viewpassword")
//     let password = document.querySelector("#password-signup");
//     if (password.type === "password") {
//         password.type = "text";
//         showPassword.style.color = "blue";
//     } else if (password.type === "text") {
//         password.type = "password";
//         showPassword.style.color = "black";
//     }
// }



//=======================================================================================================================================================

console.log("script is working on this page")

// redirecting to login page
function login() {
    window.location = "index.html";
    console.log("functioncalled")
}

function validateSignup(event) {
    event.preventDefault(); //submit ke default behaviour ko prevent karta hai ie. reload on submit etc

    console.log("script is working for validation");
   
    let fullName = document.getElementById('name-signup').value;
    let userEmail = document.getElementById('email-signup').value;
    const userPassword = document.getElementById('user-password').value; 
    let invalidMsgFullName = document.getElementById("invalid-name");
    let invalidMsgPassword = document.getElementById("invalid-password");
    let invalidMsgEmail = document.getElementById("invalid-email");
    let reqName = /^[a-zA-Z ]+$/; // Updated regex for full names
    let reqEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    let reqPass = /^(?=.*\d)(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])(?=.*[a-z])(?=.*[A-Z]).{5,15}$/;
    let checkbox = document.getElementById("terms").checked;


    // Creating new user object
    const newUser = {
        name: fullName,  // Use local variables
        email: userEmail,
        password: userPassword
    };

    handleSignup(newUser);  // Pass newUser directly


    // Clear previous error messages
    invalidMsgFullName.innerHTML = "";
    invalidMsgPassword.innerHTML = "";
    invalidMsgEmail.innerHTML = "";

    if (fullName === "" || !reqName.test(fullName)) {
        invalidMsgFullName.innerHTML = "Enter a valid Name";
        return false;
    }

    if (!reqEmail.test(email) || email === "") {
        invalidMsgEmail.innerHTML = "Enter a valid Email";
        return false;
    }

    if (!reqPass.test(password) || password === "") {
        invalidMsgPassword.innerHTML = "Enter a valid Password with one uppercase letter, one lowercase letter, and at least one special character.";
        return false;
    }

    if (!checkbox) {
        alert("Please check terms and conditions");
        return false;
    } else {
        invalidMsgEmail.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        invalidMsgPassword.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        invalidMsgFullName.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;

    }

    // Resetting the input fields
    document.getElementById('name-signup').value = "";
    document.getElementById('email-signup').value = "";
    document.getElementById('password-signup').value = "";
}

// Adding user data to local storage
function handleSignup(newUser) {
    console.log("script is working for adding user")
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the user already exists
    // const userExists = users.some(user => user.email === newUser.email);
    // if (userExists) {
    //     alert("User already exists!");
    //     return;
    // }

    // Adding new user to the array of users
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Done Successfully");
    window.location.href = "index.html";
}


//===========================================================================================================================


// // validating signup
// function validateSignup() {
//     console.log("in")
//     let fullName = document.getElementById('name-signup').value;
//     let email = document.getElementById('email-signup').value;
//     const password = document.getElementById('user-password').value;
//     let invalidMsgFullName = document.getElementById("invalid-name");
//     let invalidMsgPassword = document.getElementById("invalid-password");
//     let invalidMsgEmail = document.getElementById("invalid-email");
//     let reqName = /^[a-zA-Z].*[\s\.]*$/g;
//     let reqEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
//     let reqPass = /^(?=.*\d)(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])(?=.*[a-z])(?=.*[A-Z]).{5,15}$/;
//     let checkbox = document.getElementById("terms").checked

//     if (fullName == "" || !reqName.test(fullName)) {
//         invalidMsgFullName.innerHTML = "Enter a Name";
//         return false;
//     }

//     if (!reqEmail.test(email) || email == "") {
//         invalidMsgEmail.innerHTML = "Enter a valid Email";
//         return false;
//     }

//     if (!reqPass.test(password) || password == "") {
//         invalidMsgPassword.innerHTML = "Enter a valid Password with one uppercase letter, one lowercase letter, and at least one special character.";
//         return false;
//     }

//     if (!checkbox) {
//         alert("Please check terms and conditions")
//         return false;
//     }

//     else {
//         invalidMsgEmail.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
//         invalidMsgPassword.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
//         invalidMsgFullName.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
//         // Creating new user object
//         const newUser = {
//             name: userName,
//             email: userEmail,
//             password: userPassword
//         };
//         handleSignup(userData);
//     }
//     document.getElementById('fullName').value = "";
//     document.getElementById('email').value = "";
//     document.getElementById('password').value = "";
// }


// // adding user data to local storage
// function handleSignup(userData) {
//     var userName = document.getElementById("name-signup").value;
//     var userEmail = document.getElementById("email-signup").value;
//     var userPassword = document.getElementById("password-signup").value;

//     let users = JSON.parse(localStorage.getItem("users")) || []

//     // Adding new user to the array of users
//     users.push(newUser);

//     localStorage.setItem("users", JSON.stringify(users));

//     // 1. localStorage -> user
//     // 2. parse
//     // 3. users = []
//     // 4. localstorage set
//     // 5. redirect login

//     const userExists = storedUserData.some(user => user.email === userData.email);
//     if (userExists) {
//         alert("User already exists!");
//         return;
//     }
//     alert("Registration Done Successfully");
//     window.location.href = "index.html";
// }
