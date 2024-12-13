function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
  let humanChoice = prompt("What's your sign?");
  humanChoice = humanChoice.toLocaleLowerCase()
  if (humanChoice === 'scissors' || humanChoice === 'rock' || humanChoice === 'paper') {
    return humanChoice
  }
  else{
    alert("Invalid Input.")
  }
}