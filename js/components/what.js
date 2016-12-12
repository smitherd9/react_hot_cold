import React from 'react';
import actions from '../actions/index';
import About from './about';
import { connect } from 'react-redux';
import store from '../store';


class What extends React.Component {
	constructor(props){
		super(props);
		this.about = this.about.bind(this);
	}

	about() {
		store.dispatch(actions.aboutScreen(true));
	}



	render() {
		console.log(this.props);
		
		return (
		<li>		
		{ this.props.aboutScreen ? (<About />) : (<a className="new" href="#" onClick={this.about} >What ?</a>) }
		</li>

	   );
	}

}

const mapStateToProps = (state, props) => {
    return {
        aboutScreen: state.aboutScreen
    }
}

export default connect(mapStateToProps)(What);


