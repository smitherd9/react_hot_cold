import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';


export default class NewGame extends React.Component {
	constructor(props){
		super(props);
		this.newGame = this.newGame.bind(this);
		

	}

	    newGame() {
	        store.dispatch(actions.newGame());
	        console.log(store.getState());
	    }



	render() {

		return (
		
		<li><a className="new" href="#" onClick={this.newGame}>+ New Game</a></li>
		
	   );
	}
}

// let mapStateToProps = (state, props) => {
//     return {
//         initialGameState
//     }
// };

// export default connect(mapStateToProps)(NewGame);