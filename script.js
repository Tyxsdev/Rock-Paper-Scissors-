function getComputerChoice() {
    const random = Math.floor(Math.random() * 3)
    if (random === 0){
        return 'Rock'
    }else if (random === 1){
        return 'Paper'
    }else {
        return 'Scissors'
    }
}

const playerSelection = window.prompt('Make your choice');
let computerSelection; 
function play(playerSelection, computerSelection) { 
    computerSelection = getComputerChoice();
    if (playerSelection === computerSelection){
        return 'Tie'
    }else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return 'You lose Paper beats Rock'
    }else if (playerSelection === 'Rock' && computerSelection === 'Scissors'){
        return 'You win Rock beats Scissors'
    }else if (playerSelection === 'Paper' && computerSelection === 'Scissors'){
        return 'You lose Scissors beats Paper'
    }else if (playerSelection === 'Paper' && computerSelection === 'Rock'){
        return 'You win Paper beats Rock'
    }else if (playerSelection === 'Scissors' && computerSelection === 'Rock'){
        return 'You lose Rock beats Scissors'
    }else if (playerSelection === 'Scissors' && computerSelection === 'Paper'){
        return 'You win Scissors beats Paper'
    }
}

console.log(play(playerSelection, computerSelection));