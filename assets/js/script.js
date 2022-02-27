
//Code to wait for the html page to load before any other code be executed

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function () {
            if(this.getAttribute("data-type") === "submit"){
                alert("You clicked Submit!");
            }
            else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    runGame("addition");
})

//
/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {

    //created two random numbers
 let num1 = Math.floor(Math.random()*25)+1;
 let num2 = Math.floor(Math.random()*25)+1;

 if (gameType === "addition") {
     displayAdditionQuestion(num1, num2);
 }
 else if (gameType === "substract") {
     displaySubtractQuestion(num1, num2);
 }
 else if (gameType === "multiply") {
     displayMultiplyQuestion(num1, num2);
 }
 else if (gameType === "division") {
     displayDivisionQuestion(num1, num2);
 }
 else {
     alert(`unknown gae type: ${gameType}`);
     throw `'unknown game tupe: ${gameType}. Aborting!`;
 }

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
  document.getElementById("operand1").textContent = operand1;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestion(operand1, operand2) {
  document.getElementById("operand1").textContent = operand1;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "-";
}

function displayMultiplyQuestion(operand1, operand2) {
  document.getElementById("operand1").textContent = operand1;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "x";
}

function displayDivisionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "/";
}