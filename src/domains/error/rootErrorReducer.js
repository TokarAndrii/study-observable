import { combineReducers } from 'redux';
import isErrorReducer from './isErrorReducer';
import errorMessageReducer from './errorMessageReducer';

const rootErrorReducer = combineReducers({
    isError: isErrorReducer,
    errorMessage: errorMessageReducer
});


export default rootErrorReducer;