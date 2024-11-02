function viewPassword(){
    var passwordState = document.getElementById("view-password");
}


function login(){
    window.location = "index.html";
    console.log("functioncalled")
}


function handleSignup() {
    var userName = document.getElementById("name-signup").value;
    var userEmail = document.getElementById("email-signup").value;
    var userPassword = document.getElementById("password-signup").value;

    
    let users = JSON.parse(localStorage.getItem("users")) ||[]

    // Creating new user object
    const newUser = {
        name: userName,
        email: userEmail,
        password: userPassword
    };

    // Adding new user to the array of users
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    // 1. localStorage -> user 
    // 2. parse
    // 3. users = []
    // 4. localstorage set
    // 5. redirect login

    // localStorage.setItem("name", name);
    // localStorage.setItem("email", email);
    // localStorage.setItem("password", password);
}

function passwordHideShow() {
    let showPassword = document.getElementById("viewpassword")
    let password = document.querySelector("#password-signup");
    if (password.type === "password") {
        password.type = "text";
        showPassword.style.color = "blue";
    } else if (password.type === "text") {
        password.type = "password";
        showPassword.style.color = "black";
    }
}