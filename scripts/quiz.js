
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

// Keep track of questions and the current question index
let currentQuestionIndex = Math.floor(Math.random() * questions.length); // Start with a random question
let questionsSeen = new Set();

//for progress bar => variables
const totalQuestions = 10;
let progressStep = 10; // Increment step for each answered question


// Display the question and options
function loadQuestion() {
    const display = document.getElementById("quiz-page");
    const questionObject = questions[currentQuestionIndex];

    //  HTML for the current question and its options
    const displayQuiz = `
        <div id="question-container">
            <h1>Question ${questionsSeen.size + 1} of ${totalQuestions}</h1>
                <div class="progress-bar">
                    <div class="progress" id="progress" style="width: 10%;"></div>
                </div>
            <div class="question">
                <h2>${questionsSeen.size + 1}. ${questionObject.question}</h2>
            </div>
            <div id="options-container">
                ${questionObject.options.map((option, index) => `
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


    // Add event listener for the submit button
    document.getElementById("submit-continue").addEventListener("click", handleNextQuestion);

    // Add event listener for the previous button
    document.getElementById("previous").addEventListener("click", handlePreviousQuestion);


    //visibilty of the previous button
    if (questionsSeen.size == 0) {
        previous.style.display = "none";
    }

}//load question end




function updateProgressBar() {
    const progress = (questionsSeen.size + 1) * progressStep; // Incremental progress by 10% per question
    const progressbar = document.getElementById('progress');
    progressbar.style.width = progress + '%';
}




// Handle the next question display
function handleNextQuestion() {
    const options = document.getElementsByName("options");
    let isSelected = false;

    let index = 0;
    let score = 0;
    let rightAnswer = questions[currentQuestionIndex].rightAns;
    // console.log(rightAnswer);


    let choosedOption;
    for (let option of options) {
        if (option.checked) {
            isSelected = true;
            choosedOption = (questions[currentQuestionIndex].options[index]);
            // console.log(choosedOption)
            break;
        }
        index++;
    }
    // console.log({ choosedOption, rightAnswer })
    if (choosedOption == rightAnswer) {
        score = score + 10;
        // console.log(score)
    }


    // If no option is selected, show an alert and return
    if (!isSelected) {
        alert("Please select an option before proceeding to the next question.");
        return;
    }

    questionsSeen.add(currentQuestionIndex);

    // If all questions have been seen, end the quiz
    if (questionsSeen.size === 10) {
        document.getElementById("quiz-page").innerHTML = "<h2>Quiz Completed!</h2>";
        window.location = "/pages/leaderboard.html"
        return;
    }

    // Load a new random question that hasn't been seen yet
    do {
        currentQuestionIndex = Math.floor(Math.random() * questions.length);
    } while (questionsSeen.has(currentQuestionIndex));

    loadQuestion();

    updateProgressBar();


}//handlenextquestion end



function handlePreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        questionsSeen--;
        loadQuestion();
    }
    // console.log(questionsSeen);
}

// function handlePreviousQuestion(){
//     // function handlePreviousQuestion() {
//     //     if (currentQuestionIndex > 0) {
//     //         currentQuestionIndex--;
//     //         loadQuestion();
//     //     }
//     // }
// }

// Start the quiz by loading the first question
function startQuiz() {
    loadQuestion();
}

