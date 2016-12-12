import actions from '../actions/index';
import store from '../store';
import { combineReducers, createStore } from 'redux';

const initialGameState = {
	randomNum: Math.floor((Math.random() * 100) + 1),
	guess: [],
    currentGuess: 0,
    guessNumber: 0,
	message: 'Make your guess!',
	aboutScreen: false,
    fewestGuesses: ""
};

// console.log(actions);
const HotColdReducer = function(state, action) {    
    state = state || initialGameState;

    if (action.type === actions.GUESS) {

    	return Object.assign({}, state, {
            currentGuess: action.guess,

        });
    }

    if (action.type === actions.CHECK) {
        state.guess.push(state.currentGuess);
        if (state.currentGuess == state.randomNum) {
            // winner
            return Object.assign({}, state, {
                message: 'You won!',
                guessNumber: ++state.guessNumber
            });
        }
            else if (Math.abs(state.currentGuess - state.randomNum) <= 5) {
                return Object.assign({}, state, {
                    message: 'You\'re burning up!',
                    guessNumber: ++state.guessNumber

                });
            }
                else {
                    return Object.assign({}, state, {
                        message: 'It\'s frigid in here!',
                        guessNumber: ++state.guessNumber
                    });
                }
            
        
    }


    if (action.type === actions.NEWGAME){
        return Object.assign({}, state,  {
            randomNum: Math.floor((Math.random() * 100) + 1),
            guess: [],
            currentGuess: 0,
            guessNumber: 0,
            message: 'Make your guess!',
            aboutScreen: false,
            fewestGuesses: ""
        });
        
    }

    if (action.type === actions.ABOUT){
        return Object.assign({}, state, {
            aboutScreen: true
        });
    }

    if (action.type === actions.CLOSE_ABOUT){
        return Object.assign({}, state, {
            aboutScreen: false
        });
    }

    // if (action.type === actions.FEWEST){
    //     return Object.assign({}, state, {
    //         fewestGuesses: 
    //     });
    // }

    return state;
    	
    };



// store.dispatch(actions.GUESS(5));
// { type: 'GUESS', guess: guess }
// store.getState();
// [ { guess: 5 } ]

// store.dispatch(actions.MESSAGE());
// { type: 'MESSAGE', message:  }



export default HotColdReducer;