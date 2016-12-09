import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index';
import store from '../store';



class Messages extends React.Component {
    constructor(props){
        super(props);
        store.dispatch(actions.displayMessage("Hello"));
    }

    render() {

        return ( 
            <h2 id = "feedback" >{this.props.message}</h2>

        );
    }
}

let mapStateToProps = (state, props) => {
    return {
        message: state.message
    }
};

export default connect(mapStateToProps)(Messages);

