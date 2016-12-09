import actions from '../actions/index';
import store from '../store';
import { combineReducers, createStore } from 'redux';

const initialGameState = {
	randomNum: Math.floor((Math.random() * 100) + 1),
	guess: [],
	message: []
	// aboutScreen: false;
};


const HotColdReducer = function(state, action) {
    state = state || initialGameState;
    // if (action.type === actions.RANDOM_NUM) {
    //     // let number = Math.floor((Math.random() * 100) + 1);
    //     // let random = state.randomNum.concat(action.randomNum);
    //     return Object.assign({}, state, {
    //         randomNum: number
    //     });

    // }

    if (action.type === actions.GUESS) {
        let guessArr = [];
        guessArr.push(action.guess);
    	let newGuess = guessArr.concat(state.guess);
    	return Object.assign({}, state, {
            guess: newGuess
        });
    }

    if (action.type === actions.MESSAGE){
    	let guess = state.guess;
    	let randomNum = state.randomNum;
            if (state = initialGameState){
                return Object.assign({}, state, {
                    message: 'Make your guess!'
                    // is it better to just set make your guess the message in initialGameState?              
                                    
                });
            } 

    		else if (Math.abs(guess[guess.length-1] - randomNum) <= 5) {
    			return Object.assign({}, state, {
    				message: 'You\'re burning up!'   			
    				   				
    			});
    		}
    		else {
    			return Object.assign({}, state, {
    				message: 'It\'s frigid in here!'    				
    			});
    		}    		
    		

    	}

    if (action.type === actions.NEWGAME){

    }





    return state;
    	
    };



// store.dispatch(actions.GUESS(5));
// { type: 'GUESS', guess: guess }
// store.getState();
// [ { guess: 5 } ]

// store.dispatch(actions.MESSAGE());
// { type: 'MESSAGE', message:  }



export default HotColdReducer;