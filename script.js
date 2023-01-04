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
    current.textContent = '';
    if (playerSelection === computerSelection){
        current.textContent = `It's a tie`;        
    }else if (playerSelection === 'rock'){
        if(computerSelection === 'paper'){
            current.textContent = `Computer win ${computerSelection} beats ${playerSelection}`;            
            computerScore++;
        }else{
            current.textContent = `You win ${playerSelection} beats ${computerSelection}`;           
            playerScore++;
        }
    }else if (playerSelection === 'paper'){
        if(computerSelection === 'scissors'){
            current.textContent = `Computer win ${computerSelection} beats ${playerSelection}`;            
            computerScore++;
        }else{
            current.textContent = `You win ${playerSelection} beats ${computerSelection}`;           
            playerScore++;
        }
    }else if (playerSelection === 'scissors'){
        if(computerSelection === 'rock'){
            current.textContent = `Computer win ${computerSelection} beats ${playerSelection}`;            
            computerScore++;
        }else{
            current.textContent = `You win ${playerSelection} beats ${computerSelection}`;            
            playerScore++;
        }
    }
    results.appendChild(current);
    playerCurrentScore.textContent = `Your score is: ${playerScore}`
    computerCurrentScore.textContent = `The computer score is: ${computerScore}`;

    if (playerScore === 5 && computerScore <= 5){
        winner.textContent = `The winner is: You`;
    } else if (computerScore === 5 && playerScore <= 5){
        winner.textContent = `The winner is: The Computer`;
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

const results = document.createElement('div')
const current = document.createElement('span');

const score = document.createElement('div');
const computerCurrentScore = document.createElement('span');
const playerCurrentScore = document.createElement('span');
const winner = document.createElement('p');


rock.textContent = 'rock';
paper.textContent = 'paper';
scissors.textContent = 'scissors';
rock.classList.add('buttons');
paper.classList.add('buttons');
scissors.classList.add('buttons');

current.classList.add('current');
div.classList.add('container');
results.classList.add('container');
score.classList.add('container')

playerCurrentScore.textContent = `Your score is: 0`
computerCurrentScore.textContent = `The computer score is: 0`
winner.textContent = `The winner is: `

score.appendChild(playerCurrentScore);
score.appendChild(computerCurrentScore);
score.appendChild(winner);

div.appendChild(rock);
div.appendChild(paper);
div.appendChild(scissors);

document.body.appendChild(div);
document.body.appendChild(results);
document.body.appendChild(score);


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


