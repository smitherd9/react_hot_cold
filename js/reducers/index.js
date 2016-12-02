import actions from '../actions/index';
import store from '../store';

const initialGameState = {
	randomNum: 5,
	guess: [],
	message: {

	}
	// aboutScreen: false;
};


var HotColdReducer = function(state, action) {
    state = state || initialGameState;
    if (action.type === actions.RANDOM_NUM) {
        return state.concat({
            number: action.randomNum            
        });
    }

    if (action.type === actions.GUESS) {
    	var newGuess = state.guess.concat(action.guess);
    	return state.concat({
    		guess: newGuess
    	});
    }

    if (action.type === actions.MESSAGE){
    	var guess = state.guess;
    	var randomNum = state.randomNum;    	
    		if (Math.abs(guess[guess.length-1] - randomNum) <= 5) {
    			return state.concat({
    				message: {
    					hot: 'You\'re burning up!'
    				}    				
    			});
    		}
    		else {
    			return state.concat({
    				message: {
    					cold: 'It\'s frigid in here!'
    				}
    			});
    		}
    		
    		

    		}
    	
    };



// store.dispatch(actions.GUESS(5));
// { type: 'GUESS', guess: guess }
// store.getState();
// [ { guess: 5 } ]

// store.dispatch(actions.MESSAGE());
// { type: 'MESSAGE', message:  }



exports.HotColdReducer = HotColdReducer;