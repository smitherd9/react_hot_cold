import React from 'react';
import actions from '../actions/index';
import store from '../store';
import reducers from '../reducers/index';
import { connect } from 'react-redux';

import Messages from './messages';
import Guess from './guess';

export default class Game extends React.Component {
	constructor(props){
	super(props);

	}


	render() {
		return ( 

			<div className="game">
				
				<Messages   />   
				<Guess  />  
			</div>
			    );
	}
}

// let mapStateToProps = (state, props) => {
//     return {
//         randomNum: state.randomNum
//     }
// };

// export default connect(mapStateToProps)(Game);