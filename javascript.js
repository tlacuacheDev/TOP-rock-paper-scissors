
let humanScore = 0;
let computerScore = 0;
let round = 0;

const btns = document.querySelectorAll(".option")

btns.forEach( btn => {

  btn.addEventListener("click", function (e) {
    // console.log(e.target.textContent)
      let userChoice = ""
      if (e.target.textContent == "✊") userChoice = "rock"
      if (e.target.textContent == "✋") userChoice = "paper"
      if (e.target.textContent == "✌️") userChoice = "scissors"

      playRound(userChoice)
  })
})

function getComputerChoice() {

  computerChoice = Math.floor(Math.random() * 3);
  
  
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


function playRound(userChoice) {
  
  //if (round > 5) return endGame()
  //let humanChoice = 
  let compChoice = getComputerChoice()
  
  if (humanScore == 0 && computerScore == 0){
    createScoreboard()
  }
  
  para = document.querySelector('.scoreboard')
  para2 = document.querySelector('.scoreboard-message')
  para3 = document.querySelector('.scoreboard-message2')
    
  para.textContent = `Human Choice is: ${userChoice} & Computer Choice is: ${compChoice}`
  para2.textContent = whoWins(userChoice, compChoice)
  round++;
  para3.textContent = `At round ${round} the current score : Human: ${humanScore} Computer: ${computerScore}`
  
}


//////////////// Aux Functions

function whoWins(humanChoice, compChoice){

  if (humanChoice === compChoice) return 'It is a tie!'

  switch (humanChoice) {
    case 'scissors':
      if (compChoice === "paper") return humanWon()
      return computerWon()
      break;

    case 'rock':
      if (compChoice === "scissors") return humanWon()
      return computerWon()
      break;

    case 'paper':
      if (compChoice === "rock")return humanWon()
        return computerWon()
        break;

      default:
      console.log('Something went wrong.')
  }
}


function humanWon(){
  humanScore++;
  return "You Win!"
}

function computerWon(){
  computerScore++;
  return "Computer Wins!"
}

function createScoreboard(){

  const para = document.createElement('p')
  const para2 = document.createElement('p')
  const para3 = document.createElement('p')
  
  const body = document.querySelector('body')
  para.classList.add("scoreboard")
  para2.classList.add("scoreboard-message")
  para3.classList.add("scoreboard-message2")
  
  body.appendChild(para)
  body.appendChild(para2)
  body.appendChild(para3)
}