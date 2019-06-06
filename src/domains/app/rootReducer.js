import { combineReducers } from 'redux';
import usersReducer from '../users/usersReducer';
import isLoadingReducer from '../loader/isLoadingReducer';


const rootReducer = combineReducers({
    isLoading: isLoadingReducer,
    users: usersReducer
});


export default rootReducer;