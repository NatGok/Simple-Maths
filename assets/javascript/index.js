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
            }
        });
    }
});

// Generate a random integer between 1 and 25 inclusive
let x =  Math.floor(Math.random() * 25) + 1;
let y =  Math.floor(Math.random() * 25) + 1;

function runGamepad() {
    
}

// actualAnswer

// Increase total

// decrease total

// Display plusquestion

// Display minusquestion

// Display multiplyquestion

// Display divisionsquestion
 