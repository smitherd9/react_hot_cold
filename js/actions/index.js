// Actions needed:

// Guess a number
// Generate a new random number 
// Display message hot or cold to user 
// Update number of guesses

export const RANDOM_NUM = 'RANDOM_NUM';
export const generateRandomNum = (randomNum) => {
	return {
		type: RANDOM_NUM,
		randomNum: randomNum 

	}
}


export const GUESS = 'GUESS';
export const userGuess = (guess) => {
	return {
		type: GUESS,
		guess: guess
	}
}


export const MESSAGE = 'MESSAGE';
export const displayMessage = (message) => {
	return {
		type: MESSAGE,
		message: message

	}
}

export const NEWGAME = 'NEWGAME';
export const newGame = () => {
	return {
		type: NEWGAME,
		newgame: newgame
	}
}


// export RANDOM_NUM = RANDOM_NUM;
// export generateRandomNum = generateRandomNum;
// export GUESS = GUESS;
// export userGuess = userGuess;
// export MESSAGE = MESSAGE;
// export displayMessage = displayMessage;
// exports.UPDATE = UPDATE;
// exports.updateNumGuess = updateNumGuess;
