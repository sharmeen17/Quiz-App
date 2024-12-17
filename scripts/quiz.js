
var questions = [
    {
        question: 'Who is known as the "Father of the Nation" in India?',
        options: [
            "1. Jawaharlal Nehru",
            "2. Mahatma Gandhi",
            "3. Subhas Chandra Bose",
            "4. Bhagat Singh"
        ],
        rightAns: "Mahatma Gandhi"
    },
    {
        question: 'What is the capital of France?',
        options: [
            "1. Berlin",
            "2. Madrid",
            "3. Paris",
            "4. Rome"
        ],
        rightAns:" Paris"
    },
    {
        question: 'Which planet is known as the "Red Planet"?',
        options: [
            "1. Venus",
            "2. Mars",
            "3. Jupiter",
            "4. Saturn"
        ],
        rightAns: "Mars"
    },
    {
        question: 'Who wrote the play "Romeo and Juliet"?',
        options: [
            "1. William Wordsworth",
            "2. Charles Dickens",
            "3. William Shakespeare",
            "4. George Orwell"
        ],
        rightAns:"William Shakespeare"
    },
    {
        question: 'What is the largest mammal on Earth?',
        options: [
            "1. Elephant",
            "2. Giraffe",
            "3. Blue Whale",
            "4. Great White Shark"
        ],
        rightAns:"Blue Whale"
    },
    {
        question: 'Which gas is most abundant in the Earth\'s atmosphere?',
        options: [
            "1. Oxygen",
            "2. Carbon Dioxide",
            "3. Nitrogen",
            "4. Hydrogen"
        ],
        rightAns:"Nitrogen"
    },
    {
        question: 'In which continent is the Sahara Desert located?',
        options: [
            "1. Asia",
            "2. Africa",
            "3. Australia",
            "4. South America"
        ],
        rightAns:"Asia"
    },
    {
        question: 'Who was the first person to walk on the moon?',
        options: [
            "1. Neil Armstrong",
            "2. Yuri Gagarin",
            "3. Buzz Aldrin",
            "4. Alan Shepard"
        ],
        rightAns:"Neil Armstrong"
    },
    {
        question: 'What is the longest river in the world?',
        options: [
            "1. Amazon",
            "2. Nile",
            "3. Yangtze",
            "4. Mississippi"
        ],
        rightAns:"Nile"
    },
    {
        question: 'How many planets are in our solar system?',
        options: [
            "1. 7",
            "2. 8",
            "3. 9",
            "4. 10"
        ],
        rightAns:"8"
    },
    {
        question: 'Who invented the light bulb?',
        options: [
            "1. Nikola Tesla",
            "2. Alexander Graham Bell",
            "3. Thomas Edison",
            "4. Albert Einstein"
        ],
        rightAns:"Thomas Edison"
    }

];

// Keep track of questions and the current question index
let currentQuestionIndex = Math.floor(Math.random() * questions.length); // Start with a random question
let questionsSeen = new Set();

const totalQuestions = 10;
let progressStep = 10; // Increment step for each answered question


// Display the question and options
function loadQuestion() {
    const display = document.getElementById("quiz-page");
    const questionObject = questions[currentQuestionIndex];

    // Create the HTML for the current question and its options
    const displayQuiz = `
        <div id="question-container">
            <h1>Question ${questionsSeen.size + 1} of 10</h1>
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
                        <label for="option${index}">${option}</label>
                    </div>
                `).join('')}
            </div>
            <div class="previous-submit">
                <div id="previous">
                    
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
    // document.getElementById("previous").addEventListener("click", handlePreviousQuestion);

    if (currentQuestionIndex > 0) {
        previous.innerHTML = 
        `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="22" viewBox="0 0 28 22" fill="none">
                        <path d="M26 11L2 11M2 11L11 20M2 11L11 2" stroke="#8E8E93" stroke-width="3"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p>Previous</p>`
    }
    if (currentQuestionIndex ==0) {
        console.log(currentQuestionIndex)
        previous.style.display= none;
    }

}

function updateProgressBar() {
    const progress = questionsSeen.size * progressStep; // Incremental progress by 10% per question
    const progressbar = document.getElementById('progress');
    progressbar.style.width = progress + '%';
  }

// Handle the next question display
function handleNextQuestion() {
    const options= document.getElementsByName("options");
    let isSelected = false;
    for (let option of options) {
        if (option.checked) {
            isSelected = true;
            break;
        }
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
        window.location= "/pages/leaderboard.html"
        return;
    }

    // Load a new random question that hasn't been seen yet
    do {
        currentQuestionIndex = Math.floor(Math.random() * questions.length);
    } while (questionsSeen.has(currentQuestionIndex));

    loadQuestion();

    updateProgressBar();

let userSelectedAnswer = document.getElementsByName("options").value;
console.log(userSelectedAnswer);

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

