const quizData = [
    {
        question: "Which built-in method calls a function for each element in the array?",
        a: "while()",
        b: "loop()",
        c: "forEach()",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which built-in method reverses the order of the elements of an array?",
        a: "changeOrder(order)",
        b: "reverse()",
        c: "sort(order)",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which of the following is a valid type of function javascript supports?",
        a: "named function",
        b: "anonymous function",
        c: "Both the above",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quizContainer = document.querySelector("#quiz");
const ul = document.querySelector("#ul");
let a_text = document.querySelector("#a_text");
let b_text = document.querySelector("#b_text");
let c_text = document.querySelector("#c_text");
let d_text = document.querySelector("#d_text");
const submitBtn = document.querySelector('#submit');
let answer = document.querySelectorAll(".answer");
let questionArea = document.querySelector("#question");
let userInput;
let currentQuiz = 0
let count = 0;
let score = 0;

loadQuiz(count);

function loadQuiz(count) {
    if (count >= quizData.length) {
        console.log('result');
        loadResult();
        return;
    }
    setTimeout(() => {
        questionArea.innerText = quizData[count].question;
        a_text.innerText = quizData[count].a;
        b_text.innerText = quizData[count].b;
        c_text.innerText = quizData[count].c;
        d_text.innerText = quizData[count].d;
        quizContainer.style.backgroundColor = "#5DA3FA";
        quizContainer.style.color = "black";
    }, 1000)

}
function loadResult() {
    questionArea.innerText = `Total correct answers = ${score}`;
    ul.innerHTML = `<h3 style= "text-align:center">Thanks for participating</h3>`
}
function correctAnswer() {
    score = score + 1;
    quizContainer.style.transitionDuration = ".8s";
    quizContainer.style.backgroundColor = "green";
    quizContainer.style.color = "White";
}
function incorrectAnswer() {
    quizContainer.style.transitionDuration = ".8s";
    quizContainer.style.backgroundColor = "red";
    quizContainer.style.color = "White";
}
function selectedOption() {
    for (let i = 0; i < 4; i++) {
        if (answer[i].checked) {
            switch (i) {
                case 0:
                    return 'a';
                case 1:
                    return 'b';
                case 2:
                    return 'c';
                case 3:
                    return 'd';
                default:
                    break;
            }
        }
    }
    let ans = isCorrect(count, selectedOption);
    console.log(ans);
}
function isCorrect(count, userInput) {
    console.log(`sele is ${userInput} correc is ${quizData[count].correct}`);
    if (userInput === null) {
        return;
    }
    return quizData[count].correct === String(userInput);
}
submitBtn.addEventListener('click', function handleClick() {
    let instantResult = isCorrect(count, selectedOption());
    if (instantResult) {
        correctAnswer();
    } else {
        incorrectAnswer();
    }
    loadQuiz(++count);
});