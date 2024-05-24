const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Giraffe", correct: false },
            { text: "Polar Bear", correct: false },
        ]
    },
    {
        question: "Which is the largest continent in the world?",
        answers: [
            { text: "North America", correct: false },
            { text: "Africa", correct: false },
            { text: "Asia", correct: true },
            { text: "Oceania", correct: false },
        ]
    },
    {
        question: "Which is the smallest animal in the world?",
        answers: [
            { text: "Amau frog", correct: true },
            { text: "Red Ant", correct: false },
            { text: "Shrimp", correct: false },
            { text: "Golden Lion Tamarin", correct: false },
        ]
    },
    {
        question: "Who is the greatest god in Greek Mitholigy?",
        answers: [
            { text: "Hercules", correct: false },
            { text: "Athena", correct: false },
            { text: "Apolo", correct: false },
            { text: "Zeus", correct: true },
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Pluto", correct: false },
            { text: "Mars", correct: false },
            { text: "Jupter", correct: true },
            { text: "Earth", correct: false },
        ]
    }
];

const questionElement = document.getElementByI("question");
const answerButtons = document.getElementById("answerButtons");
const nextButton = document.getElementById("nextQuest");

let currentQuestionIndex = 0;
let score = 0;

function starQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

starQuiz();