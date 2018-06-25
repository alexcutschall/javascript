const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
	  return userInput;
	} else {
    console.log("Error. Wrong Type");
  }
};

const getComputerChoice = () => {
  let choices = ['rock', 'paper', 'scissors'];
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    console.log("The game was tied");
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      console.log("The computer won");
    } else {
      console.log("You won!");
    }
  }

   if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      console.log("The computer won");
    } else {
      console.log("You won!");
    }
   }

   if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      console.log("The computer won");
    } else {
      console.log("You won!");
    }
  }
console.log(`Your guess was ${userChoice} and the computer's was ${computerChoice}.`)
};

console.log(determineWinner(getUserChoice("paper"), getComputerChoice()));
console.log(determineWinner(getUserChoice("rock"), getComputerChoice()));
console.log(determineWinner(getUserChoice("scissors"), getComputerChoice()));
