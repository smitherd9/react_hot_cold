import React from 'react';


const class Fewest extends React.Component {
	constructor(props){
		super(props);
		store.dispatch(actions.fewestGuesses());
	}
	render(){
		return (
			<h2 id = "fewest" >{this.props.fewest}</h2>
		);
	}


}

let mapStateToProps = (state, props) => {
    return {
        fewest: state.fewestGuesses
    }
};

export default connect(mapStateToProps)(Fewest); 