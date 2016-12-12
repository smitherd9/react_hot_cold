import React from 'react';
import actions from '../actions/index';
import { connect } from 'react-redux';
import store from '../store';
import Header from './header';
import Game from './game';
import What from './what';


class About extends React.Component {
	constructor(props){
		super(props);
		this.closeAbout = this.closeAbout.bind(this);
	}

	closeAbout() {
		store.dispatch(actions.closeAbout(false));
	}

	render(){
		console.log(this.props);
		return (
		 	<div className="overlay" id="modal">
				<div className="content">
					<h3>What do I do?</h3>
					<div>
						<p>This is a Hot or Cold Number Guessing Game. The game goes like this: </p>
						<ul>
							<li>1. I pick a <strong>random secret number</strong> between 1 to 100 and keep it hidden.</li>
							<li>2. You need to <strong>guess</strong> until you can find the hidden secret number.</li>
							<li>3. You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.</li>
						</ul>
						<p>So, Are you ready?</p>						
						{ this.props.closeAbout ? (<Header />) (<Game />) : (<a className="close" href="#" onClick={this.closeAbout}>Got It!</a>) }				
						
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => {
    return {
        aboutScreen: state.aboutScreen
    }
}

export default connect(mapStateToProps)(About);