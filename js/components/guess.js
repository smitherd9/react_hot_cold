import React from 'react';

import actions from '../actions/index';
import store from '../store';

export default class Guess extends React.Component {
	constructor(props){
		super(props);
		$('#guessButton').click(function(e){
			e.preventDefault();
			store.dispatch(actions.userGuess("Hello"));
		});
		
	}



	render() {
		return (
				<div>
				<form>
				<input type="text" className="userGuess" id="userGuess" maxLength="3" autoComplete="off" placeholder="Enter your Guess" required/>
      			<input type="submit" id="guessButton" className="button" value="Guess"/>
				</form>
			
      			<p>Guess #<span id="count">0</span>!</p>

			
				<ul id="guessList" className="guessBox clearfix">

				</ul>
			   </div>
			   );
	}
}

// let mapStateToProps = (state, props) => {
//     return {
//         guess: state.guess
//     }
// };

// export default connect(mapStateToProps)(Guess);