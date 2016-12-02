import React from 'react';
import actions from '../actions/index';
import store from '../store';

import Messages from './messages';
import Guess from './guess';

export default class Game extends React.Component {
	render() {
		return ( 

			<div className="game">
				
				<Messages   />   
				<Guess  />  
			</div>
			    );
	}
}