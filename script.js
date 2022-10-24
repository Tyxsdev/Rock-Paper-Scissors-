let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const random = Math.floor(Math.random() * 3)
    if (random === 0){
        return 'rock'
    }else if (random === 1){
        return 'paper'
    }else {
        return 'scissors'
    }
}

function play(playerSelection, computerSelection) { 
    playerSelection = window.prompt('Make your choice').toLowerCase();
    computerSelection = getComputerChoice();
    if (playerSelection === computerSelection){
        console.log(`It's a tie`);
    }else if (playerSelection === 'rock'){
        if(computerSelection === 'paper'){
            console.log(`Computer win ${computerSelection} beats ${playerSelection}`);
            computerScore++;
        }else{
            console.log(`You win ${playerSelection} beats ${computerSelection}`);
            playerScore++;
        }
    }else if (playerSelection === 'paper'){
        if(computerSelection === 'scissors'){
            console.log(`Computer win ${computerSelection} beats ${playerSelection}`);
            computerScore++;
        }else{
            console.log(`You win ${playerSelection} beats ${computerSelection}`);
            playerScore++;
        }
    }else if (playerSelection === 'scissors'){
        if(computerSelection === 'rock'){
            console.log(`Computer win ${computerSelection} beats ${playerSelection}`);
            computerScore++;
        }else{
            console.log(`You win ${playerSelection} beats ${computerSelection}`);
            playerScore++;
        }
    }
}

function game() {
    for (let i = 0; i < 10; i++) {
        console.log(play(playerSelection, computerSelection));
    }
    console.log(`The final computer score is ${computerScore}`);
    console.log(`The final player score is ${playerScore}`);
    if (playerScore > computerScore) {
        console.log(`You win!! you beat the computer ${playerScore} to ${computerScore}`);
    }else if (computerScore > playerScore){
        console.log(`You lose!! the computer beat  you ${computerScore} to ${playerScore}`)
    }else {
        console.log(`It's a tie ${computerScore} to ${playerScore}`);
    }
    playerScore = 0;
    computerScore = 0;
}

game();