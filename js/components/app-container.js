import React from 'react';
import { render } from 'react-dom';
import Header from './header';
import Game from './game';
import actions from '../actions/index';



export default class AppContainer extends React.Component {
    constructor(props){
        super(props);

        
    }


    // guess() {
    //     var userGuess = this.refs.userGuess.value;        
    //     this.props.dispatch(actions.guess(userGuess));
    // }


    render() {
    	return (    		
    		
    		<div>
    		<Header />
    		<Game />
    		</div>
    		
    		
    		); 
    }


}
