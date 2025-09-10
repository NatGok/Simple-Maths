document.addEventListener('DOMContentLoaded', function() {
    let selection = document.getElementsByTagName('button');
    for (let button of selection) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent form submission if inside a form
            // Use this.id to check the clicked button
            if (this.id === 'submit') {
                alert('Are you sure you want to submit your answer?');
            } else {
                alert('You have clicked ' + this.id);
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

// actualAnswer

// Increase total

// decrease total

// Display plusquestion
function displayPlusQuestion() {
    let x = getRandomInt1to25();
    let y = getRandomInt1to25();
    let actualAnswer = x + y;
    console.log(`What is ${x} + ${y}?`);
    console.log(`The answer is ${actualAnswer}`);
}
// Display minusquestion

// Display multiplyquestion

// Display divisionsquestion
 