function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * 3);
  console.log(computerChoice)
  switch(computerChoice){
    case 0:
      return 'scissors'
    case 1:
      return 'paper'
    case 2:
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

function playRound(){
  humanChoice = getHumanChoice()
  computerChoice = getComputerChoice()
  console.log( `Human Choice is: ${humanChoice} & Computer Choice is: ${computerChoice}`)

  if (humanChoice === computerChoice){
    console.log('It is a tie!')
  }
  else if( humanChoice === "Invalid Input." || computerChoice === "Invalid Input."){
    console.log('Invalid input, check your code')
  }
  else {
  
    switch (humanChoice) {
      case 'scissors':
        computerChoice === "paper" ? humanScore++ : computerScore ++
        console.log(`Human: ${humanScore} Computer: ${computerScore}`)
        break;
      case 'rock':
        computerChoice === "scissors" ? humanScore++ : computerScore ++
        console.log(`Human: ${humanScore} Computer: ${computerScore}`)
        break;
      case 'paper':
        computerChoice === "rock" ? humanScore++ : computerScore ++
        console.log(`Human: ${humanScore} Computer: ${computerScore}`)
      break;
      default:
        console.log('Something went wrong.')
  }

  }
  
  
  
}

let humanScore = 0;
let computerScore = 0;