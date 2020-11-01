import { combineReducers } from 'redux';
import todoState from './todo';

const rootReducer = combineReducers( {
    todoState
});

export default rootReducer;