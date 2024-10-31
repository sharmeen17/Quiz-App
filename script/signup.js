function viewPassword(){
    var passwordState = document.getElementById("view-password");
}


function login(){
    window.location = "index.html";
    console.log("functioncalled")
}


function addDetails() {
    var name = document.getElementById("name-signup").value;
    var email = document.getElementById("email-signup").value;
    var password = document.getElementById("password-signup").value;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
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