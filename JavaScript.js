function computerPlay() {
    return "Paper".toLowerCase();
}

function round(e) {
    if (e.target.className === "paper") {
        //console.log("Tie, all papers");
        res.textContent += "tie" + "\tYou: " + playerScore + "\nComputer: " + computerScore;
    } else if (e.target.className === "rock") {
        //console.log("You Lose! Paper beats Rock");
        computerScore++;
        res.textContent += "\nYou Lose! Paper beats Rock" + "\nYou: " + playerScore + "\nComputer: " + computerScore;
    } else {
        //console.log("You Win! Scissor cuts Paper");
        playerScore++;
        res.textContent += "\nYou Win! Scissor cuts Paper" + "\nYou: " + playerScore + "\nComputer: " + computerScore;

    }

    if (computerScore == 5) {
        res.textContent = "You have lost!";
        computerScore = 0;
        playerScore = 0;
    } else if (playerScore == 5) {
        res.textContent = "You have won!"
        computerScore = 0;
        playerScore = 0;
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

const container = document.querySelector('.container');
const res = document.createElement('div');
//res.textContent = "You: " + playerScore + "\nComputer: " + computerScore;
container.appendChild(res);

//for (let i = 0; i < 5; i++) {
// while (true) {

//     playerSelection = prompt("Rock, Paper or Scissor? (write f to quit)").toLowerCase();
//     if (playerSelection == "f") {
//         i = 5;
//         break;
//     }

//     if (playerSelection != "rock" && playerSelection != "paper"
//         && playerSelection != "scissor") {
//         alert("please write one of the options correctly!");
//     } else {
//         break;
//     }
// }

//console.log(round(playerSelection, computerSelection));
//}

// if (playerScore > computerScore) {
//     console.log("Score is\nYou: " + playerScore + "\nComputer: " + computerScore + "\nCongratulations!")
// } else {
//     console.log("Score is\nComputer: " + computerScore + "\nYou: " + playerScore + "\nTry Again :(")
// }