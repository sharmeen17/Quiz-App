
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

let score = 0;

//for progress bar => variables
const totalQuestions = 10;
let progressStep = 10; // Increment step for each answered question

let questionHistory = []; // Array to track questions and answers
let currentHistoryIndex = 0;

function loadQuestion(isPrevious = false) {
    const display = document.getElementById("quiz-page");
    const questionObject = questions[currentQuestionIndex];

    // Generate HTML for the current question and its options
    const displayQuiz = `
        <div id="question-container">
            <div id="questionTitle">
            <h1>Question ${questionsSeen.size + 1} of ${totalQuestions}</h1>
            </div>
            <div class="progress-bar">
                <div class="progress" id="progress" style="width: ${questionsSeen.size * progressStep}%;"></div>
            </div>
            <div class="question" id="questionLine">
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



    // Restore selected option if navigating back
    if (isPrevious && questionHistory[questionsSeen.size]) {
        const previousAnswer = questionHistory[questionsSeen.size].selectedAnswer;
        if (previousAnswer) {
            document.querySelector(`input[value="${previousAnswer}"]`).checked = true;
        }
    }

    // Add event listener for the Submit button
    document.getElementById("submit-continue").addEventListener("click", handleNextQuestion);

    // Add event listener for the Previous button
    document.getElementById("previous").addEventListener("click", handlePreviousQuestion);

    // Toggle the visibility of the Previous button
    document.getElementById("previous").style.visibility = questionsSeen.size > 0 ? "visible" : "hidden";
}

function handleNextQuestion() {
    const options = document.getElementsByName("options");
    let isSelected = false;
    let selectedAnswer;

    for (let option of options) {
        if (option.checked) {
            isSelected = true;
            selectedAnswer = option.value;
            break;
        }
    }

    // If no option is selected, show an alert
    if (!isSelected) {
        alert("Please select an option before proceeding to the next question.");
        return;
    }

    // /Save the current question state to history
    questionHistory[currentHistoryIndex] = {
        questionIndex: currentQuestionIndex,
        selectedOption: selectedAnswer
    };

    currentHistoryIndex++; // Move forward in history

    // Check if the answer is correct and update the score
    if (selectedAnswer === questions[currentQuestionIndex].rightAns) {
        score += 10;
    }

    // Mark the question as seen
    questionsSeen.add(currentQuestionIndex);

    // If all questions have been seen, end the quiz
    if (questionsSeen.size === totalQuestions) {
        document.getElementById("quiz-page").innerHTML = "<h2>Quiz Completed!</h2>";
        window.location = "/pages/leaderboard.html";
        return;
    }

    // Load a new random question that hasn't been seen
    do {
        currentQuestionIndex = Math.floor(Math.random() * questions.length);
    } while (questionsSeen.has(currentQuestionIndex));

    loadQuestion();
    updateProgressBar();
}


function handlePreviousQuestion() {
    if (currentHistoryIndex > 0) {
        currentHistoryIndex--; // Move back in history
        const previousData = questionHistory[currentHistoryIndex]; // Access the correct history

        if (previousData) {
            currentQuestionIndex = previousData.questionIndex; // Restore the previous question index
            loadQuestion(true); // Load the previous question and restore the answer
            
            // Update progress and display restored question number
            const progressBar = document.getElementById('progress');
            progressBar.style.width = `${(questionsSeen.size - 1) * progressStep}%`;
            
            // Display the correct question number and content
            document.getElementById("questionTitle").innerHTML = `<h1>Question ${currentHistoryIndex + 1} of ${totalQuestions}</h1>`;
            document.getElementById("questionLine").innerHTML = `<h2>${currentHistoryIndex + 1}. ${questions[currentQuestionIndex].question}</h2>`;

            // Restore previously selected option
            const previousAnswer = previousData.selectedOption;
            if (previousAnswer) {
                const optionElement = document.querySelector(`input[value="${previousAnswer}"]`);
                if (optionElement) {
                    optionElement.checked = true;
                }
            }
        }
    } else {
        alert("You are at the first question!");
    }
}

//=========================================================================================================

function updateProgressBar() {
    const progress = (questionsSeen.size / totalQuestions) * 100; // Calculate progress percentage
    const progressBar = document.getElementById('progress');
    // progressBar.style.width = `${progress}%`;
    progressBar.style.width = progress+ "%";

}

// Start the quiz by loading the first question
function startQuiz() {
    loadQuestion();
}
