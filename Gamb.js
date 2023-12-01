console.log('hi!');

const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}


function checkWinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "tie";
    }
    else if( 
            (playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "paper" && computerSelection == "rock") ||
            (playerSelection == "scissors" && computerSelection == "paper")
    ){
        return "player"
    }
    else{
        return "computer"
    }
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "tie"){
        return "It's a tie!"
    }
    else if (result == "player"){
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    else{
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("rock paper scissors");
        if (choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("welcome!")
    for (let i = 0; i<5; i++) { 
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("---------")
        if(checkWinner(playerSelection,computerSelection) == "player"){
            scorePlayer++;
        }
        else if (checkWinner(playerSelection,computerSelection) == "computer"){
            scoreComputer++;
        }
    }
    console.log("Game Over")
    if(scorePlayer > scoreComputer){
        console.log("You won!");
    }
    else if (scorePlayer< scoreComputer){
        console.log("You lost!");
    }
    else{
        console.log("it's a draw!");
    }
}


game()