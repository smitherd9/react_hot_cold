import React from 'react';

import actions from '../actions/index';
import store from '../store';

export default class Guess extends React.Component {
	render() {
		return (
				<div>
				<form>
				<input type="text" className="userGuess" id="userGuess" className="text" maxLength="3" autoComplete="off" placeholder="Enter your Guess" required/>
      			<input type="submit" id="guessButton" className="button" value="Guess"/>
				</form>
			
      			<p>Guess #<span id="count">0</span>!</p>
			
				<ul id="guessList" className="guessBox clearfix">

				</ul>
			   </div>
			   );
	}
}