function viewPassword(){
    var passwordState = document.getElementById("view-password");
}


function signup(){
    window.location = "pages/signup.html"
}


function addDetails() {
    var email = document.getElementById("emailLogin").value;
    var password = document.getElementById("passwordLogin").value;
    
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
}

function passwordHideShow() {
    let showPassword = document.getElementById("viewpassword");
    let password = document.querySelector("#passwordLogin");
    if (password.type === "password") {
        password.type = "text";
        showPassword.style.color = "blue";
    } else if (password.type === "text") {
        password.type = "password";
        showPassword.style.color = "black";
    }
}