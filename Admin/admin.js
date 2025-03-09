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

    
    menu.classList.toggle("active");
    welcomeContent.classList.toggle("active");
}


function changeFontColor(){
    var text = document.getElementById("home");
    text.style.color = text.style.color === "gray"? "yellow" : "gray";
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