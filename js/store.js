import redux from 'redux';
import { creatStore } from redux.createStore;

import reducers from './reducers/index';

let store = createStore(reducers.HotColdReducer);

import { RANDOM_NUM, GUESS, MESSAGE } from './actions/index'

console.log(store.getState())

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(MESSAGE())





unsubscribe()
module.exports  = store;