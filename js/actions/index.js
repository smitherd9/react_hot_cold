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
const fewestGuessesSuccess = (fewestGuesses) => {
	return {
		type: FEWEST,
		fewestGuesses: fewestGuesses
	}
}

const FEWEST_ERR = 'FEWEST_ERR';
const fewestGuessesErr = (fewestGuesses, err) => {
	return {
		type: FEWEST_ERR,
		err: err
	}
}

const SAVE_FEWEST = 'SAVE_FEWEST';
const saveFewestGuessesSuccess = (fewestGuesses) => {
	return {
		type: SAVE_FEWEST,
		fewestGuesses: fewestGuesses
	}
}

const SAVE_FEWEST_ERR = 'SAVE_FEWEST_ERR';
const saveFewestGuessesErr = (fewestGuesses, err) => {
	return {
		type: SAVE_FEWEST_ERR,
		err: err
	}
}


const fewestGuesses = function(guesses) {
    return function(dispatch) {
        var url = '/fewest-guesses';
        return fetch(url).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {            
            return dispatch(
                fewestGuessesSuccess(fewestGuesses)
            );
        })
        .catch(function(err) {
            return dispatch(
                fewestGuessesErr(fewestGuesses, err)
            );
        });
    }
};


const saveFewestGuesses = function(guesses) {
    return function(dispatch) {
        var url = '/fewest-guesses';
        return fetch(url).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {            
            return dispatch(
                saveFewestGuessesSuccess(fewestGuesses)
            );
        })
        .catch(function(err) {
            return dispatch(
                saveFewestGuessesErr(fewestGuesses, err)
            );
        });
    }
};




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
exports.FEWEST = FEWEST;
exports.fewestGuessesSuccess = fewestGuessesSuccess;
exports.FEWEST_ERR = FEWEST_ERR;
exports.fewestGuessesErr = fewestGuessesErr;
exports.SAVE_FEWEST = SAVE_FEWEST;
exports.saveFewestGuesses = saveFewestGuesses;
exports.SAVE_FEWEST_ERR = SAVE_FEWEST_ERR;
exports.saveFewestGuessesErr = saveFewestGuessesErr;
