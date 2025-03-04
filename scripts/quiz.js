
var questions = [
    {
        question: 'Who is known as the "Father of the Nation" in India?',
        options: [
            "Jawaharlal Nehru",
            "Mahatma Gandhi",
            "Subhas Chandra Bose",
            "Bhagat Singh"
        ],
        rightAns: "Mahatma Gandhi"
    },
    {
        question: 'What is the capital of France?',
        options: [
            "Berlin",
            "Madrid",
            "Paris",
            "Rome"
        ],
        rightAns: " Paris"
    },
    {
        question: 'Which planet is known as the "Red Planet"?',
        options: [
            "Venus",
            "Mars",
            "Jupiter",
            "Saturn"
        ],
        rightAns: "Mars"
    },
    {
        question: 'Who wrote the play "Romeo and Juliet"?',
        options: [
            "William Wordsworth",
            "Charles Dickens",
            "William Shakespeare",
            "George Orwell"
        ],
        rightAns: "William Shakespeare"
    },
    {
        question: 'What is the largest mammal on Earth?',
        options: [
            "Elephant",
            "Giraffe",
            "Blue Whale",
            "Great White Shark"
        ],
        rightAns: "Blue Whale"
    },
    {
        question: 'Which gas is most abundant in the Earth\'s atmosphere?',
        options: [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        rightAns: "Nitrogen"
    },
    {
        question: 'In which continent is the Sahara Desert located?',
        options: [
            "Asia",
            "Africa",
            "Australia",
            "South America"
        ],
        rightAns: "Asia"
    },
    {
        question: 'Who was the first person to walk on the moon?',
        options: [
            "Neil Armstrong",
            "Yuri Gagarin",
            "Buzz Aldrin",
            "Alan Shepard"
        ],
        rightAns: "Neil Armstrong"
    },
    {
        question: 'What is the longest river in the world?',
        options: [
            "Amazon",
            "Nile",
            "Yangtze",
            "Mississippi"
        ],
        rightAns: "Nile"
    },
    {
        question: 'How many planets are in our solar system?',
        options: [
            "7",
            "8",
            "9",
            "10"
        ],
        rightAns: "8"
    },
    {
        question: 'Who invented the light bulb?',
        options: [
            "Nikola Tesla",
            "Alexander Graham Bell",
            "Thomas Edison",
            "Albert Einstein"
        ],
        rightAns: "Thomas Edison"
    }

];

if (!localStorage.getItem("quizQuestions")) {
    localStorage.setItem("quizQuestions", JSON.stringify(questions));
}


let score = 0;
let currentIndex = 0;
const totalQuestions = 10;
let progressStep = 10;
// Increment step for each answered question


function getRandomQuestions() {
    const allQuestions = JSON.parse(localStorage.getItem("quizQuestions"));
    let randomQuestion = [];
    let questionIndex = []
    while (randomQuestion.length < 10) {
        let randomIndex = Math.floor(Math.random() * allQuestions.length);
        //   question.add(randomIndex);
        if (!questionIndex.includes(randomIndex)) {
            questionIndex.push(randomIndex);
            randomQuestion.push(allQuestions[randomIndex]);
        }
    }
    return randomQuestion
}

const quizSet = getRandomQuestions(); // This will be different for each user


function loadQuestion(isPrevious = false) {
    const display = document.getElementById("quiz-page");

    // const questionObject = questions[currentQuestionIndex];

    // Generate HTML for the current question and its options
    const displayQuiz = `
        <div id="question-container">
            <div id="questionTitle">
            <h1>Question ${currentIndex + 1} of ${totalQuestions}</h1>
            </div>
            <div class="progress-bar">
                <div class="progress" id="progress" style="width: ${quizSet.size * progressStep}%;"></div>
            </div>
            <div class="question" id="questionLine">
                <h2>${currentIndex + 1}. ${quizSet[currentIndex].question}</h2>
            </div>
            <div id="options-container">
               ${quizSet[currentIndex].options.map((option, index) => `
                    <div class="option-text">
                        <input type="radio" name="options" id="option${index}" value="${option}">
                        <label for="option${index}">${index + 1}. ${option}</label>
                
                    </div>
                `).join('')}
            </div>
            <div class="previous-submit">
                <div id="previous">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="22" viewBox="0 0 28 22" fill="none">
                        <path d="M26 11L2 11M2 11L11 20M2 11L11 2" stroke="#8E8E93" stroke-width="3"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p>Previous</p>
                </div>
                <div id="submit-continue">
                    <p>Submit & Continue</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="22" viewBox="0 0 28 22" fill="none">
                        <path d="M2 11L26 11M26 11L17 20M26 11L17 2" stroke="#0948B4" stroke-width="3"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    `;

    // Set the HTML content of quiz-page
    display.innerHTML = displayQuiz;
    updateProgressBar();



    // // Restore selected option if navigating back
    // if (isPrevious && questionHistory[currentIndex.size]) {
    //     const previousAnswer = questionHistory[currentIndex.size].selectedAnswer;
    //     if (previousAnswer) {
    //         document.querySelector(`input[value="${previousAnswer}"]`).checked = true;
    //     }
    // }

    // Add event listener for the Submit button
    document.getElementById("submit-continue").addEventListener("click", handleNextQuestion);

    // Add event listener for the Previous button
    document.getElementById("previous").addEventListener("click", handlePreviousQuestion);

    // Toggle the visibility of the Previous button
    document.getElementById("previous").style.visibility = currentIndex > 0 ? "visible" : "hidden";
}


function updateProgressBar() {
    const progress = ((currentIndex + 1) / totalQuestions) * 100; // Calculate progress percentage
    const progressBar = document.getElementById('progress');
    // progressBar.style.width = `${progress}%`;
    progressBar.style.width = progress + "%";

}


const options = document.getElementsByName("options");


function handleNextQuestion() {

    let isSelected = false;
    let selectedAnswer;

    for (let option of options) {
        if (option.checked) {
            isSelected = true;
            selectedAnswer = option.value;
            break;
        }
    }
    quizSet[currentIndex].choosedAnswer = selectedAnswer; //saved the selected answer by user


    // If no option is selected, show an alert
    if (!isSelected) {
        alert("Please select an option before proceeding to the next question.");
        return;
    }
    currentIndex++;




    // Check if the answer is correct and update the score
    if (selectedAnswer == quizSet[currentIndex - 1].rightAns) {
        score += 10;
    }

    // console.log(score);

    // console.log(quizSet);

    const Newcurrentuser = JSON.parse(localStorage.getItem("currentUser"));



    if (currentIndex == quizSet.length) {
        //add user score etc here


        let userData = JSON.parse(localStorage.getItem("userData")) || [];
        // const Newcurrentuser = JSON.parse(localStorage.getItem("currentUser"));

        let Zname = Newcurrentuser.userName;
        let Zemail = Newcurrentuser.userEmail;




        let loggedInUser = {
            playerName: Zname,
            playerEmail: Zemail,
            Score: score,
            TimeTaken: "",
            Quizdata: quizSet
        }

        userData.push(loggedInUser);
        localStorage.setItem("userData", JSON.stringify(userData));








        window.location = "/pages/leaderboard.html";
    }

    // console.log(quizSet.length);

    // setTimeout(function () {
    //     window.location = "/pages/leaderboard.html"; //will redirect to your blog page (an ex: blog.html)
    // }, 1000); //will call the function after 2 secs.

    updateProgressBar();

    if (currentIndex < 10) {
        loadQuestion();
    }

}

function handlePreviousQuestion() {
    // debugger
    if (currentIndex > 0) {
        currentIndex--; // Move back to the previous question
        loadQuestion();

        // Restore previously selected answer
        const previousAnswer = quizSet[currentIndex].choosedAnswer;
        const options = document.getElementsByName("options");

        for (let option of options) {
            option.checked = (option.value === previousAnswer);
        }

        // Update progress bar
        const progressBar = document.getElementById('progress');
        progressBar.style.width = `${(currentIndex / (quizSet.length - 1)) * 100}%`;

        // Load previous question
    } else {
        alert("This is the first question. You cannot go back further.");
    }
}


// Start the quiz by loading the first question
function startQuiz() {
    // const loggedInUser = {
    //     UserName: "moin",
    //     UserEmail: "moin123",
    //     Score:"34",
    //     TimeTaken: "34",
    //     Answers:"jkdsfjks"
    // }

    // localStorage.setItem("loggedUser", loggedInUser)


    loadQuestion();

}







//=======================leaderboard============================================================

// function leaderboard(){
//     let userScore = JSON.parse(localStorage.getItem("userData"));

//     // console.log(userScore)
//     let scoreParameters = userScore.map(user => user.Score);

//     console.log(scoreParameters);

//     // let scoreParameter = userScore[0].Score;

//     // console.log(scoreParameter);


// }



function leaderboard() {
    let userDataItem = JSON.parse(localStorage.getItem("userData"));
    let currentUserItem = JSON.parse(localStorage.getItem("currentUser"));

    let displayUserRank = document.getElementById("displayUserRank");

    console.log(currentUserItem)
    

    // Sort in descending order
    const sortedUsers = userDataItem.sort((p1, p2) =>
        (p1.Score < p2.Score) ? 1 : (p1.Score > p2.Score) ? -1 : 0);
    console.log(sortedUsers[0].playerName);


    let currentUserRank;
    sortedUsers.forEach((sU, index) => {
        console.log(sU)                                                 //checking mail for rank
        if (sU.playerEmail === currentUserItem.userEmail) {
            currentUserRank = index + 1;
        }
    });

    displayUserRank.innerHTML += currentUserRank
    // console.log(currentUserRank)


    // Get the highest score
    let highestScore = sortedUsers[0];
    let secondHighestScore = sortedUsers[1];
    let thirdHighestScore = sortedUsers[2];
    let fourthHighestScore = sortedUsers[3];
    let fifthHighestScore = sortedUsers[4];
    let sixthHighestScore = sortedUsers[5];

    

    let displayFirstRank = document.getElementById("firstRankScore");
    let displaySecondRank = document.getElementById("secondRankScore");
    let displayThirdRank = document.getElementById("thirdRankScore");
    let displayFourthRank = document.getElementById("fourthRankScore");
    let displayFifthRank = document.getElementById("fifthRankScore");
    let displaySixthRank = document.getElementById("sixthRankScore");


    displayFirstRank.innerHTML += highestScore.Score;
    displaySecondRank.innerHTML += secondHighestScore?.Score || 0;
    displayThirdRank.innerHTML+= thirdHighestScore?.Score || 0;
    displayFourthRank.innerHTML+= fourthHighestScore?.Score || 0; 
    displayFifthRank.innerHTML+= fifthHighestScore?.Score || 0;
    displaySixthRank.innerHTML += sixthHighestScore?.Score || 0;

    //get name of player with highest score
    let firstRank = sortedUsers[0].playerName;
    let secondRank = sortedUsers[1]?.playerName || NaN;
    let thirdRank = sortedUsers[2]?.playerName || NaN;
    let fourthRank = sortedUsers[3]?.playerName || NaN;
    let fifthRank = sortedUsers[4]?.playerName || NaN;
    let sixthRank = sortedUsers[5]?.playerName || NaN;

    let displayPlayer1Name = document.getElementById("player1");
    let displayPlayer2Name = document.getElementById("player2");
    let displayPlayer3Name = document.getElementById("player3");
    let displayPlayer4Name = document.getElementById("player4");
    let displayPlayer5Name = document.getElementById("player5");
    let displayPlayer6Name = document.getElementById("player6");

    displayPlayer1Name.innerHTML += firstRank;
    displayPlayer2Name.innerHTML += secondRank;
    displayPlayer3Name.innerHTML += thirdRank;
    displayPlayer4Name.innerHTML += fourthRank;
    displayPlayer5Name.innerHTML += fifthRank;
    displayPlayer6Name.innerHTML += sixthRank;
    console.log(firstRank)


}
