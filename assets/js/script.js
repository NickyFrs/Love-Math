
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
                alert(`you clicked ${gameType}`);
            }
        })
    }
})

//

function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQueation() {

}

function displayMultiplyQueation() {

}