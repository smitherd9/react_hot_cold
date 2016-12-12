import React from 'react';

import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';

class Guess extends React.Component {
	constructor(props){
		super(props);	
		this.handleClick = this.handleClick.bind(this);
		this.handleInput = this.handleInput.bind(this);
	}

	handleClick(e) {
		e.preventDefault();			
		store.dispatch(actions.checkNumber(store.getState().guess));
	}

	handleInput(e) {
		store.dispatch(actions.userGuess(e.target.value));
		console.log(store.getState().guess);

	}

	componentDidUpdate() {
		store.dispatch(actions.fewestGuesses());

		if (this.props.message == 'You won!'){
			store.dispatch(actions.saveFewestGuesses());
		}


	}



	render() {
		
		return (
				<div>
				<form>
				<input type="text" className="userGuess" id="userGuess" maxLength="3" onChange={this.handleInput} autoComplete="off" placeholder="Enter your Guess" required/>
      			<input type="submit" id="guessButton" className="button" onClick={this.handleClick} value="Guess"/>
				</form>
			
      			<p>Guess #<span id="count">{this.props.guessNumber}</span>!</p>
      			<p>Fewest Guesses: {this.props.fewestGuesses}</p>

			
				<ul id="guessList" className="guessBox clearfix">

				</ul>
			   </div>
			   );
	}
}

let mapStateToProps = (state, props) => {
    return {
    	message: state.message,
        guess: state.guess,
        guessNumber: state.guessNumber,
        fewestGuesses: state.fewestGuesses
    }
};

export default connect(mapStateToProps)(Guess);