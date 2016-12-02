// Actions needed:

// Guess a number
// Generate a new random number 
// Display message hot or cold to user 
// Update number of guesses

var RANDOM_NUM = 'RANDOM_NUM';
var generateRandomNum = function(randomNum) {
	return {
		type: RANDOM_NUM,
		randomNum: randomNum 

	}
}


var GUESS = 'GUESS';
var userGuess = function(guess){
	return {
		type: GUESS,
		guess: guess
	}
}


var MESSAGE = 'MESSAGE';
var displayMessage = function(message) {
	return {
		type: MESSAGE,
		message: message

	}
}


exports.RANDOM_NUM = RANDOM_NUM;
exports.generateRandomNum = generateRandomNum;
exports.GUESS = GUESS;
exports.userGuess = userGuess;
exports.MESSAGE = MESSAGE;
exports.displayMessage = displayMessage;
// exports.UPDATE = UPDATE;
// exports.updateNumGuess = updateNumGuess;
