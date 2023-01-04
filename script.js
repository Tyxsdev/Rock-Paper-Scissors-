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

function play() {
    computerSelection = getComputerChoice();
    victory.textContent = '';
    defeat.textContent = '';
    if (playerSelection === computerSelection){
        console.log(`It's a tie`);
    }else if (playerSelection === 'rock'){
        if(computerSelection === 'paper'){
            console.log(`Computer win ${computerSelection} beats ${playerSelection}`);
            defeat.textContent = `Computer win ${computerSelection} beats ${playerSelection}`;
            div.appendChild(defeat);
            computerScore++;
        }else{
            console.log(`You win ${playerSelection} beats ${computerSelection}`);
            victory.textContent = `You win ${playerSelection} beats ${computerSelection}`;
            div.appendChild(victory);
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

/* function game() {
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

game(); */

const div = document.createElement('div');
const rock = document.createElement('button');
const scissors = document.createElement('button');
const paper = document.createElement('button');
const victory = document.createElement('span');
const defeat = document.createElement('span')


rock.textContent = 'rock';
paper.textContent = 'paper';
scissors.textContent = 'scissors';
rock.classList.add('buttons');
paper.classList.add('buttons');
scissors.classList.add('buttons');


div.appendChild(rock);
div.appendChild(paper);
div.appendChild(scissors);
document.body.appendChild(div);

function buttonClicked(e){
    playerSelection = e.target.textContent;
}


let buttons = document.querySelectorAll('.buttons');
buttons.forEach((button) => {
    button.addEventListener('click', buttonClicked)
});

buttons.forEach((button) => {
    button.addEventListener('click', play)
})


