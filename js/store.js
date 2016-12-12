import redux from 'redux';

import { combineReducers, createStore } from 'redux';
import actions from './actions/index';


import reducers from './reducers/index';
import HotColdReducer from './reducers/index';

// const HotColdReducer = combineReducers({
// 	HotColdReducer

// });

const store = createStore(HotColdReducer);


console.log(store.getState());


export default store;