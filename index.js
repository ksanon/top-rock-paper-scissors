const CHOICES = ['rock', 'paper', 'scissors'];
//const playerSelection = "rock";
const computerSelection = getComputerChoice();
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
rockBtn.addEventListener('click', () => {
    alert("your pressed rock");
});

function getComputerChoice(){
    return CHOICES[Math.floor(Math.random()*3)] 
}

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    if(playerSelection == computerSelection){
        return("It's a tie! Try again.");
    }
    else if(playerSelection == 'rock' && computerSelection =='scissors'){
        return("You Win! Rock beats scissors.");
    }
    else if(playerSelection== 'rock' && computerSelection =='paper'){
        return("You Lose! Paper beats rock.");
    }
    else if(playerSelection== 'paper' && computerSelection =='rock'){
        return("You Win! Paper beats rock.");
    }
    else if(playerSelection== 'paper' && computerSelection =='scissors'){
        return("You Lose! Scissors beats paper.");
    }
    else if(playerSelection== 'scissors' && computerSelection =='paper'){
        return("You Win! Scissors beats paper.");
    }
    else if(playerSelection== 'scissors' && computerSelection =='rock'){
        return("You Lose! Rock beats scissors.");
    }
}
function gameOver(player,cpu){
    return(player==5 || cpu==5);
}
function isWinner(player, cpu){
    if(player > cpu){
        return (console.log("You won the game! Player: " + player + " CPU: " + cpu));
    }
    else
        return (console.log("You lost the game! Player: " + player + " CPU: " + cpu));
}



function game(){

    let playerScore =0;
    let computerScore = 0;
    let userPrompt = '';
    
   /* for(let i=0; i<5; i++){
        userPrompt = prompt("Rock, Paper, or Scissors?");

        
        if(playRound(userPrompt,getComputerChoice()).includes("Lose")){
            computerScore++;
            console.log("The computer won this round. \n Player: " + playerScore + "  CPU: " + computerScore);
        }else if(playRound(userPrompt,getComputerChoice()).includes("Win")){
            playerScore++;
            console.log("You won this round! \n Player: " + playerScore + "  CPU: " + computerScore);
        }else if(playRound(userPrompt,getComputerChoice()).includes("tie")){
            console.log("It's a tie this round! \n Player: " + playerScore + "  CPU: " + computerScore);
        }


    }
*/

    
    if(playerScore == computerScore){


    }

    isWinner(playerScore, computerScore);
    
}

game();
//console.log(playRound(playerSelection, computerSelection));