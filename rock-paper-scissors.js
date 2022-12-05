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

function game() {
    let winner = new Array(5);
    for (let i = 0; i < 5; i++) {
        console.log(`round ${i + 1} result:`);
        // const playerSelection = prompt(`Please enter your choice for round ${i + 1}`);
        const playerSelection = "rock";

        let result = playRound(playerSelection, getComputerChoice());
        console.log(result);
        winner[i] = result.includes("win") ? "player" :
            result.includes("lose") ? "computer" :
                "draw";
    }
    winner = (winner.filter(x => x == "player").length == winner.filter(x => x == "computer").length) ? "Draw" :
        (winner.filter(x => x == "player").length > winner.filter(x => x == "computer").length) ? "You" :
            "Computer";
    console.log(`Final winner: ${winner}!`);
}

game();