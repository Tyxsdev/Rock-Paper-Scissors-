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
let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
function play(playerSelection, computerSelection) { 
    playerSelection = window.prompt('Make your choice').toLowerCase();
    computerSelection = getComputerChoice();
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection === computerSelection){
        console.log(`It's a tie`);
    }else if (playerSelection === 'rock'){
        if(computerSelection === 'paper'){
            console.log('Computer win');
            computerScore++;
            console.log(`computer score is ${computerScore}`);
        }else{
            console.log('You Win');
            playerScore++;
            console.log(`player score is ${playerScore}`);
        }
    }else if (playerSelection === 'paper'){
        if(computerSelection === 'scissors'){
            console.log('Computer win');
            computerScore++;
            console.log(`computer score is ${computerScore}`);
        }else{
            console.log('You Win');
            playerScore++;
            console.log(`player score is ${playerScore}`);
        }
    }else if (playerSelection === 'scissors'){
        if(computerSelection === 'rock'){
            console.log('Computer win');
            computerScore++;
            console.log(`computer score is ${computerScore}`);
        }else{
            console.log('You Win');
            playerScore++;
            console.log(`player score is ${playerScore}`);
        }
    }
}

function game() {
    for (let i = 0; i < 15; i++) {
        console.log(play(playerSelection, computerSelection));
    }
    console.log(`The final computer score is ${computerScore}`);
    console.log(`The final player score is ${playerScore}`);
    playerScore = 0;
    computerScore = 0;
}

game();