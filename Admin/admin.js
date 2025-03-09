// function toggleMenu() {
//     var menu = document.getElementById("menu");
//     var hamburger = document.querySelector(".hamburger");

//     // Menu show/hide toggle
//     if (menu.style.display === "block") {
//         menu.style.display = "none";
//         hamburger.classList.remove("rotate"); // Rotate back
//     } else {
//         menu.style.display = "block";
//         hamburger.classList.add("rotate"); // Rotate on click
//     }
//         }

function toggleMenu() {
    var menu = document.getElementById("menu");
    var welcomeContent = document.getElementById("welcome")
    var hamburgerState = document.querySelector(".hamburger")


    menu.classList.toggle("active");
    welcomeContent.classList.toggle("active");
    hamburgerState.classList.toggle("active")
}


function changeFontColor() {
    var text = document.getElementById("home");
    text.style.color = text.style.color === "gray" ? "yellow" : "gray";
}

// function changeFontColor(){
//     var homeText = document.getElementById("home");
//     var aboutText = document.getElementById("about");
//     var quizText = document.getElementById("quiz");

// if (homeText){
//     homeText.style.color = homeText.style.color === "gray"? "yellow": "gray";

// }

// else if(aboutText){
//     aboutText.style.color = aboutText.style.color === "gray"? "yellow": "gray";

// }
// else(quizText)
//     quizText.style.color = quizText.style.color === "gray"? "yellow": "gray";

// }

function displayLogout() {


//======================================== not working for second click============================================

    let displayLogoutContent = document.getElementById("logout-container");

    let existingDisplayLogout = document.querySelector(".logout-container");

    if (existingDisplayLogout) {
        existingDisplayLogout.remove();
    }
    else {
        displayLogoutContent.innerHTML +=
            `<div id="adminLogout">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" class="adminLogout-icon" fill="currentColor"
                    class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </svg>
                <div id="admin-details">
                    <div id="admin-name">
                        <p>admin</p>
                    </div>
                    <div id="admin-email">
                        <p>admin@gmail.com</p>
                    </div>
    
                </div>
                <button id="logout-button">Logout</button>
    
            </div>`;
    }
}