var questions = [
    {
        question: '1. Who is known as the "Father of the Nation" in India?',
        options: [
            "1. Jawaharlal Nehru",
            "2. Mahatma Gandhi",
            "3. Subhas Chandra Bose",
            "4. Bhagat Singh"
            ]
    },
    {
        question: '2. What is the capital of France?',
        options: [
            "1. Berlin",
            "2. Madrid",
            "3. Paris",
            "4. Rome"
            ]
    },
    {
        question: '3. Which planet is known as the "Red Planet"?',
        options: [
            "1. Venus",
            "2. Mars",
            "3. Jupiter",
            "4. Saturn"
            ]
    },
    {
        question: '4. Who wrote the play "Romeo and Juliet"?',
        options: [
            "1. William Wordsworth",
            "2. Charles Dickens",
            "3. William Shakespeare",
            "4. George Orwell"
            ]
    },
    {
        question: '5. What is the largest mammal on Earth?',
        options: [
            "1. Elephant",
            "2. Giraffe",
            "3. Blue Whale",
            "4. Great White Shark"
            ]
    },
    {
        question: '6. Which gas is most abundant in the Earth\'s atmosphere?',
        options: [
            "1. Oxygen",
            "2. Carbon Dioxide",
            "3. Nitrogen",
            "4. Hydrogen"
            ]
    },
    {
        question: '7. In which continent is the Sahara Desert located?',
        options: [
            "1. Asia",
            "2. Africa",
            "3. Australia",
            "4. South America"
            ]
    },
    {
        question: '8. Who was the first person to walk on the moon?',
        options: [
            "1. Neil Armstrong",
            "2. Yuri Gagarin",
            "3. Buzz Aldrin",
            "4. Alan Shepard"
            ]
    },
    {
        question: '9. What is the longest river in the world?',
        options: [
            "1. Amazon",
            "2. Nile",
            "3. Yangtze",
            "4. Mississippi"
            ]
    },
    {
        question: '10. How many planets are in our solar system?',
        options: [
            "1. 7",
            "2. 8",
            "3. 9",
            "4. 10"
            ]
    }
]

console.log(questions);

function loadQuestions(){
    
}


function startQuiz(){
    window.location = "quiz.html"
    console.log("fun called");
    var questionDisplay = document.getElementById("question-container");
}