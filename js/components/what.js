import React from 'react';
import actions from '../actions/index';


export class What extends React.Component {
	constructor(props){
		super(props);
		this.about = this.about.bind(this);
	}

	about() {
		this.props.dispatch(
			actions.aboutScreen()
			);
	}



	render() {
		console.log(this.props);
		
		return (
		
		<li><a className="new" href="#" onClick={this.about} >What ?</a></li>

		if ({this.props.aboutScreen}){
			<About />
		}
		

	   );
	}
}

const mapStateToProps = (state, props) => {
    return {
        aboutScreen: state.aboutScreen
    }
}

export default connect(mapStateToProps)(What);


