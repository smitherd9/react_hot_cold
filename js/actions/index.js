// Actions needed:

// Guess a number
// Generate a new random number 
// Display message hot or cold to user 
// Update number of guesses

// export const RANDOM_NUM = 'RANDOM_NUM';
// export const generateRandomNum = (randomNum) => {
// 	return {
// 		type: RANDOM_NUM,
// 		randomNum: randomNum 

// 	}
// }


 const GUESS = 'GUESS';
 const userGuess = (guess) => {
	return {
		type: GUESS,
		guess: guess
	}
}

const CHECK = 'CHECK';
const checkNumber = (number) => {
	return {
		type: CHECK,
		checkNumber: number
	}
}


 const MESSAGE = 'MESSAGE';
 const displayMessage = (message) => {
	return {
		type: MESSAGE,
		message: message

	}
}

 const NEWGAME = 'NEWGAME';
 const newGame = () => {
	return {
		type: NEWGAME
		// newGame: newGame
	}
}

 const ABOUT = 'ABOUT';
 const aboutScreen = (about) => {
	return {
		type: ABOUT,
		about: about

	}
}

const CLOSE_ABOUT = 'CLOSE_ABOUT';
const closeAbout = (close_about) => {
	return {
		type: CLOSE_ABOUT,
		close_about: close_about
	}
}

 const FEWEST = 'FEWEST';
 const fewestGuesses = () => {
	return {
		type: FEWEST,
		fewestGuesses: fewestGuesses
	}
}

const FEWEST_ERR = 'FEWEST_ERR';
const fewestGuessesErr = () => {
	return {
		
	}
}


// export RANDOM_NUM = RANDOM_NUM;
// export generateRandomNum = generateRandomNum;
exports.GUESS = GUESS;
exports.userGuess = userGuess;
exports.MESSAGE = MESSAGE;
exports.displayMessage = displayMessage;
exports.ABOUT = ABOUT;
exports.aboutScreen = aboutScreen;
exports.FEWEST = FEWEST;
exports.fewestGuesses = fewestGuesses;
exports.CHECK = CHECK;
exports.checkNumber = checkNumber;
exports.CLOSE_ABOUT = CLOSE_ABOUT;
exports.closeAbout = closeAbout;
exports.NEWGAME = NEWGAME;
exports.newGame = newGame;
