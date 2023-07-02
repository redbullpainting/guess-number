let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let generateTarget = () => {
  return Math.floor(Math.random()* 10);
};
console.log(generateTarget());
//step 1
const compareGuesses = (humanGuess, computerGuess, secretGuess) => {
const userG = Math.abs(secretGuess - humanGuess); 
const compG = Math.abs(secretGuess - computerGuess);
{
  return userG <= compG
   
  }
};
let updateScore = winner => {
  if(winner === 'humanScore'){
humanScore += 1;
  }  else if (winner === 'computerScore'){
    computerScore += 1;
  }
};
const advanceRound = () => {
  currentRoundNumber += 1;
}
