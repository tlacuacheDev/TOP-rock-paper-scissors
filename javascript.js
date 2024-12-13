function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * 3);
  switch(computerChoice){
    case 1:
      return 'scissors'
    case 2:
      return 'paper'
    case 3:
      return 'rock'
    default:
      console.log("Invalid Input.")
      return "Invalid Input."

  }  
}

function getHumanChoice() {
  let humanChoice = prompt("Choose between Rock, Paper or Scissors");
  humanChoice = humanChoice.toLocaleLowerCase()
  if (humanChoice === 'scissors' || humanChoice === 'rock' || humanChoice === 'paper') {
    return humanChoice
  }
  else{
    console.log("Invalid Input.")
    return "Invalid Input."
  }
}

function playRound(humanChoice, computerChoice){
  
  if (humanChoice === computerChoice){
    
  }
  else if( humanChoice === "Invalid Input." || computerChoice === "Invalid Input."){

  }
  else {
  
    switch (humanChoice) {
      case 'scissors':
        computerChoice === "paper" ? humanScore++ : computerScore ++
        break;
      case 'rock':
        computerChoice === "scissors" ? humanScore++ : computerScore ++
        break;
      case 'paper':
        computerChoice === "rock" ? humanScore++ : computerScore ++
      break;
  }

  }
  
  
  
}

let humanScore = 0;
let computerScore = 0;