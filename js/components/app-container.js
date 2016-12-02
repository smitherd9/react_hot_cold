import React from 'react';
import { render } from 'react-dom';
import Header from './header';
import Game from './game';



export default class AppContainer extends React.Component {

    guess() {
        var userGuess = this.refs.userGuess.value;        
        this.props.dispatch(actions.guess(userGuess));
    }

    render() {
    	return (    		
    		
    		<div>
    		<Header />
    		<Game />
    		</div>
    		
    		
    		); 
    }


}
