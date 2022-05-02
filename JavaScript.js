const newGame = document.querySelector('.newGame');
const myAnswer = document.querySelector('.myAnswer');
const computerAnswer = document.querySelector('.computerAnswer');
const resultDiv = document.querySelector('.resultDiv');
const playerScoreScreen = document.querySelector('.playerScoreScreen');
const computerScoreScreen = document.querySelector('.computerScoreScreen');


function computerPlay() {
    let number = Math.floor(Math.random() * 3);
    if (number == 0)
        return "rock";
    if (number == 1)
        return "paper";
    if (number == 2)
        return "scissor"
}

function startNewGame() {
    newGame.style.visibility = "hidden";
    playerSelection = "";
    playerScore = 0;
    computerScore = 0;
}

function round(e) {
    if (newGame.style.visibility == "hidden" ||
        newGame.style.visibility == "") {
        resultDiv.style.visibility = "hidden"
        newGame.style.visibility = "visible";
    }


    computerSelection = computerPlay()

    switch (e.target.className) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    myAnswer.textContent = '✊🏼';
                    computerAnswer.textContent = '✊🏼';
                    break;
                case "paper":
                    myAnswer.textContent = '✊🏼';
                    computerAnswer.textContent = '✋🏼';
                    computerScore++;
                    break;
                case "scissor":
                    myAnswer.textContent = '✊🏼';
                    computerAnswer.textContent = '✌🏼';
                    playerScore++;
                    break;
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "rock":
                    myAnswer.textContent = '✋🏼';
                    computerAnswer.textContent = '✊🏼';
                    playerScore++;
                    break;
                case "paper":
                    myAnswer.textContent = '✋🏼';
                    computerAnswer.textContent = '✋🏼';
                    break;
                case "scissor":
                    myAnswer.textContent = '✋🏼';
                    computerAnswer.textContent = '✌🏼';
                    computerScore++;
                    break;
            }
            break;
        case "scissor":
            switch (computerSelection) {
                case "rock":
                    myAnswer.textContent = '✌🏼';
                    computerAnswer.textContent = '✊🏼';
                    computerScore++;
                    break;
                case "paper":
                    myAnswer.textContent = '✌🏼';
                    computerAnswer.textContent = '✋🏼';
                    playerScore++;
                    break;
                case "scissor":
                    myAnswer.textContent = '✌🏼';
                    computerAnswer.textContent = '✌🏼';
                    break;
            }
            break;
    }

    playerScoreScreen.textContent = playerScore;
    computerScoreScreen.textContent = computerScore;

    if (computerScore == 5) {
        startNewGame();
        resultDiv.style.visibility = "visible";
        resultDiv.textContent = "Sorry! you have lost :( try again!"
        resultDiv.style.color = '#960000';
    } else if (playerScore == 5) {
        startNewGame()
        resultDiv.style.visibility = "visible";
        resultDiv.textContent = "Yay! you won! Congratulations"
        resultDiv.style.color = '#007700'
    }

}

let computerSelection = computerPlay();
let playerSelection = "";
let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector('.rock');
rock.addEventListener('click', round);

const paper = document.querySelector('.paper');
paper.addEventListener('click', round);

const scissor = document.querySelector('.scissor');
scissor.addEventListener('click', round);

const playAgainBut = document.querySelector('.playAgainBut');
playAgainBut.addEventListener('click', startNewGame);

const container = document.querySelector('.container');
const res = document.createElement('div');
container.appendChild(res);
