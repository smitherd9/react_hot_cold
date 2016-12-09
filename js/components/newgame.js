import React from 'react';
import actions from '../actions/index';


export default class NewGame extends React.Component {
	constructor(props){
		super(props);
		this.newGame = this.newGame.bind(this);
		// store.dispatch(actions.newGame());

	}

	    newGame() {
	        this.props.dispatch(
	            actions.newGame
	        );
	    }



	render() {

		return (
		
		<li><a className="new" href="#" onClick={this.newGame}>+ New Game</a></li>
		
	   );
	}
}