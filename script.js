let randomNumber;
let numberOfGuesses;

function startGame() {
  randomNumber = Math.floor(Math.random() * 11);
  numberOfGuesses = 0;
}

function guessNumber() {
  const userGuess = parseInt(document.getElementById("tal").value);
  numberOfGuesses++;

  if (!isNaN(userGuess)) {
    if (userGuess === randomNumber) {
      alert(`Tillykke! Du gættede det rigtige tal med ${numberOfGuesses} forsøg.`);
      const playAgain = confirm("Vil du spille igen?");
      if (playAgain) {
        startGame();
      } else {
        alert("Tak for spillet!");
      }
    } else {
      if (userGuess > randomNumber) {
        alert("For højt! Prøv igen.");
      } else {
        alert("For lavt! Prøv igen.");
      }
    }
  } else {
    alert("Invalid input. Please enter a valid number.");
  }
}

startGame();
