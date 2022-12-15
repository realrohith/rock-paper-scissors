function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let winner;
    const choices = [playerSelection, computerSelection];
    if (choices.includes("rock") && choices.includes("paper")) {
        winner = choices.indexOf("paper");
    }
    else if (choices.includes("scissors") && choices.includes("paper")) {
        winner = choices.indexOf("scissors");
    }
    else if (choices.includes("scissors") && choices.includes("rock")) {
        winner = choices.indexOf("rock");
    }
    else {
        winner = 2;
    }
    let output = (winner == 0) ? (`You win! ${playerSelection} beats ${computerSelection}`) :
        (winner == 1) ? (`You lose! ${computerSelection} beats ${playerSelection}`) :
            `It's a draw! Draw between ${computerSelection} & ${playerSelection}!`;
    return output;
}

function UpdateUI(result) {
    const manScore = document.querySelector('#man-score');
    const computerScore = document.querySelector('#computer-score');
    if (result.includes('win')) ++manScore.textContent;
    else if (result.includes('lose')) ++computerScore.textContent;

    if (manScore.textContent == 5 || computerScore.textContent == 5) {
        const winner = document.querySelector('#winner');
        const score = document.querySelector('.score');
        score.style.display = 'none';
        winner.style.fontSize = '180%';
        if (manScore.textContent == 5) {
            winner.textContent = "You have saved humanity! You are our savior!";
        }
        else if (computerScore.textContent == 5) {
            winner.textContent = "No surprise. You have doomed humanity! And so the rise of robots begins!";
        }
        return 1;
    }
    return 0;
}

function OneRound() {
    let playerSelection = this.id;
    let result = playRound(playerSelection, getComputerChoice());
    UpdateUI(result);
}
const btns = document.querySelectorAll('button');

btns.forEach(button => button.addEventListener('click', OneRound));
btns.forEach(button => button.addEventListener('mouseenter', () => {
    button.classList.add('hover');
}));
btns.forEach(button => button.addEventListener('mouseleave', () => {
    button.classList.remove('hover');
}));