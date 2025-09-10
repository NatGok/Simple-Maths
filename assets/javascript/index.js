// Track correct and incorrect answers
let correctTotal = 0;
let incorrectTotal = 0;

function updateScoreDisplay() {
    document.querySelector('.right').textContent = 'Correct Answers: ' + correctTotal;
    document.querySelector('.wrong').textContent = 'Incorrect Answers: ' + incorrectTotal;
}
document.addEventListener('DOMContentLoaded', function() {
    let selection = document.getElementsByTagName('button');
    for (let button of selection) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent form submission if inside a form
            // Use this.id to check the clicked button
            if (this.id === 'submit') {
               checkAnswer();
            } else {
 
                runGamepad(this.id);
            }
        });
    }
    // Display the first addition question automatically
    runGamepad('addition');
});

// Generate a random integer between 1 and 25 inclusive
function getRandomInt1to25() {
    return Math.floor(Math.random() * 25) + 1;
}

function runGamepad(buttonId) {
    let x = getRandomInt1to25();
    let y = getRandomInt1to25();
    if (buttonId === 'addition') {
        let actualAnswer = x + y;
        document.getElementById('num1').textContent = x;
        document.getElementById('operator').textContent = '+';
        document.getElementById('num2').textContent = y;
        // Optionally store actualAnswer for checking later
        // console.log(`What is ${x} + ${y}?`);
        // console.log(`The answer is ${actualAnswer}`);
    }
    // Add more logic for other operations as needed
}


function checkAnswer() {
    let x = parseInt(document.getElementById('num1').textContent);
    let y = parseInt(document.getElementById('num2').textContent);
    let operator = document.getElementById('operator').textContent;
    let theirGuess = parseInt(document.getElementById('answer').value);
    let actualAnswer;
    if (operator === '+') {
        actualAnswer = x + y;
    } else if (operator === '-') {
        actualAnswer = x - y;
    } else if (operator === 'x') {
        actualAnswer = x * y;
    } else if (operator === '/') {
        actualAnswer = x / y;
    }
    let currentOperator = operator;
    if (theirGuess === actualAnswer) {
        correctTotal++;
        updateScoreDisplay();
        alert("Correct!");
    } else {
        incorrectTotal++;
        updateScoreDisplay();
        alert("The answer was in fact " + actualAnswer);
    }
    // Automatically present a new question of the same type
    let opId = '';
    if (currentOperator === '+') opId = 'addition';
    else if (currentOperator === '-') opId = 'subtraction';
    else if (currentOperator === 'x') opId = 'multiplication';
    else if (currentOperator === '/') opId = 'division';
    if (opId) {
        runGamepad(opId);
    }
}



