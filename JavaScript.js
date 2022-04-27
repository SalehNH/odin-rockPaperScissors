function computerPlay() {
    return "Paper".toLowerCase();
}

function round(playerSelection, computerSelection) {
    if (playerSelection === "paper") {
        console.log("Tie, all papers");
    } else if (playerSelection === "rock") {
        console.log("You Lose! Paper beats Rock");
        computerScore++;
    } else {
        console.log("You Win! Scissor cuts Paper");
        playerScore++;
    }

}

let computerSelection = computerPlay();
let playerSelection = "";
let playerScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {
    while (true) {

        playerSelection = prompt("Rock, Paper or Scissor? (write f to quit)").toLowerCase();
        if (playerSelection == "f") {
            i = 5;
            break;
        }

        if (playerSelection != "rock" && playerSelection != "paper"
            && playerSelection != "scissor") {
            alert("please write one of the options correctly!");
        } else {
            break;
        }
    }

    console.log(round(playerSelection, computerSelection));
}

if (playerScore > computerScore) {
    console.log("Score is\nYou: " + playerScore + "\nComputer: " + computerScore + "\nCongratulations!")
} else {
    console.log("Score is\nComputer: " + computerScore + "\nYou: " + playerScore + "\nTry Again :(")


}