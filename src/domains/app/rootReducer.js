import { combineReducers } from 'redux';
import usersReducer from '../users/usersReducer';
import isLoadingReducer from '../loader/isLoadingReducer';
import rootUserEditReducer from '../edit_user/rootUserEditReducer';
import rootErrorReducer from '../error/rootErrorReducer';


const rootReducer = combineReducers({
    isLoading: isLoadingReducer,
    error: rootErrorReducer,
    users: usersReducer,
    edit: rootUserEditReducer,
});


export default rootReducer;