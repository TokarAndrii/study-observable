import { combineReducers } from 'redux';
import usersReducer from '../users/usersReducer';
import isLoadingReducer from '../loader/isLoadingReducer';
import rootUserEditReducer from '../edit_user/rootUserEditReducer';


const rootReducer = combineReducers({
    isLoading: isLoadingReducer,
    users: usersReducer,
    edit: rootUserEditReducer,
});


export default rootReducer;